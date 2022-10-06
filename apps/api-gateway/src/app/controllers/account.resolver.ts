import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateAccountInput, CreateAccountOutput } from '../dtos/create-account.dto';
import { LoginInput, LoginOutput } from '../dtos/login.dto';
import { User } from '../dtos/user.dto';


@Resolver((of) => User)
export class AccountResolver {
	constructor(/* private readonly userService: UsersService */) { }

	@Query((returns) => Boolean)
	hi() {
		return true;
	}

	@Mutation((returns) => CreateAccountOutput)
	createAccount(@Args('input') createAccountInput: CreateAccountInput): Promise<CreateAccountOutput> {
		console.log(createAccountInput)
		return null;
		//return this.userService.createAccount(createAccountInput);
	}

	@Mutation((returns) => LoginOutput)
	login(@Args('input') loginInput: LoginInput): Promise<LoginOutput> {
		console.log(LoginInput);
		return null;
		//return this.userService.login(loginInput);
	}
}
