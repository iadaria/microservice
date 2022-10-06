import { User } from './../user/entities/user.entities';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { account as Account } from 'proto-schema';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
	constructor(
		private readonly userRepository: UserRepository,
		private readonly jwtService: JwtService
	) { }

	async register({ email, password }: Account.RegisterRequest): Promise<User> {
		const oldUser = await this.userRepository.findUser(email);
		if (oldUser) {
			// TODO Error
			throw new Error('User exists');
		}

		const newUser = await this.userRepository.createUser(newUserEntity);
		return { id: 1, isBlocked: false, email: newUser.email };
	}

	async validateUser(email: string, password: string) {
		const user = await this.userRepository.findUser(email);
		if (!user) {
			throw new Error('Неверный логин или пароль');
		}
		const userEntity = new UserEntity(user);
		const isCorrectPassword = await userEntity.validatePassword(password);
		if (!isCorrectPassword) {
			throw new Error('Неверный логин или пароль');
		}
		return { id: user._id };
	}

	async login(id: string) {
		return {
			access_token: await this.jwtService.signAsync({ id })
		}
	}
}
