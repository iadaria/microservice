import { InternalServerErrorException } from '@nestjs/common';
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('AccountUser')
export class User {

	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column({ default: false })
	isBlocked: boolean;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@BeforeInsert()
	@BeforeUpdate()
	async hashPassword(): Promise<void> {
		if (this.password) {
			try {
				this.password = await bcrypt.hash(this.password, 10);
			} catch (e) {
				throw new InternalServerErrorException();
			}
		}
	}

	async checkPassword(aPassword: string): Promise<boolean> {
		try {
			const ok = await bcrypt.compare(aPassword, this.password);
			return ok;
		} catch (e) {
			console.log(e);
			throw new InternalServerErrorException();
		}
	}
}