import { User } from './../user/entities/user.entities';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { account as Account } from 'proto-schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoneResponse, FailResponse, Response } from '../common/response.dto'


@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(User) private readonly userRepository: Repository<User>,
		private readonly jwtService: JwtService
	) { }
	async register({ email, password }: Account.RegisterRequest): Promise<Account.RegisterResponse> {
		try {
			const exists = await this.userRepository.findOne({ where: { email } });
			if (exists) {
				// TODO Error
				throw new Error('There is a user with that email already');
			}
			const newUser = await this.userRepository.create({ email, password });
			await this.userRepository.save(newUser)
			return { isBlocked: false, email }
		} catch (e) {
			throw new Error("Couldn't create account");
		}
	}

	async login({ email, password }: Account.LoginRequest): Promise<Response> {
		try {
			const user = await this.userRepository.findOne({ where: { email } });
			if (!user) {
				return FailResponse('User not found');
			}

			const passwordCorrect = await user.checkPassword(password);
			if (!passwordCorrect) {
				return FailResponse('Wrong password');
			}
			const token = this.jwtService.sign({ id: user.id });
			// jwt.sign({ id: user.id }, this.config.get('SECRET_KEY'));
			return DoneResponse({ token });
		} catch (error) {
			return FailResponse(error);
		}
	}
}
