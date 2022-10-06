import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IUser } from 'interfaces';

// TODO move to common lib as entity ?
@InputType('UserInputType', { isAbstract: true })
@ObjectType()
export class User implements IUser {
	@Field((type) => String)
	email: string;

	@Field((type) => String)
	password: string;

	@Field((type) => Boolean)
	isBlocked: boolean;
	//createdAt: Date;
	//updatedAt: Date;
}