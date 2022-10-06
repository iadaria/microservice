import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
@InputType()
export class LoginInput {
	@Field((type) => String)
	email: string;

	@Field((type) => String)
	password: string;
}

@ObjectType()
export class LoginOutput {

	@Field((type) => String, { nullable: true })
	token?: string;

	@Field((type) => String, { nullable: true })
	refreshToken?: string;

	@Field((type) => Number, { nullable: true })
	expiresIn?: number;

	@Field((type) => String, { nullable: true })
	error?: string;

	@Field((type) => Boolean)
	ok: boolean;
}
