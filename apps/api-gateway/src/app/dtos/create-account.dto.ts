import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateAccountInput {
	@Field((type) => String)
	email: string;

	@Field((type) => String)
	password: string;
}

@ObjectType()
export class CreateAccountOutput {
	@Field((type) => String, { nullable: true })
	error?: string;

	@Field((type) => Boolean)
	ok: boolean;

	@Field((type) => Boolean)
	isBlocked?: boolean;
}