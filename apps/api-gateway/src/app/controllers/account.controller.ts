import { Controller, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { account as Account } from 'proto-schema';
import { Observable } from 'rxjs';

type INewUser = {
  id?: string;
  email?: string;
  isBlocked?: boolean;
}

@Controller()
export class AccountController implements OnModuleInit {
  private account: Account.AccountService;

  constructor(@Inject('AUTH_PACKAGE') private client: ClientGrpc) { }

  onModuleInit() {
    this.account = this.client.getService<Account.AccountService>('AccountService');
  }

  @Post('create')
  createUser(): Observable<INewUser> {
    return this.account.create({ email: 'email', password: 'password' })
  }

  @Post('login')
  login(): Observable<any> {
    return this.account.login({ email: 'email', password: 'password' });
  }
}
