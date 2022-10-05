import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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
}