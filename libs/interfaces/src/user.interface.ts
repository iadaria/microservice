export enum UserRole {
	Admin = 'Admin',
	User = 'User'
}

export interface IUser {
	id?: string;
	email: string;
	password: string;
	createdAt?: Date;
	updatedAt?: Date;
	isBlocked?: boolean;
}