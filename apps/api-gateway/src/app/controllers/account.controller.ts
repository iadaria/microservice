import { Controller, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { account as Account } from 'proto-schema';
import { firstValueFrom, Observable } from 'rxjs';

@Controller('account')
export class AccountController implements OnModuleInit {
  private account: Account.AccountService;

  constructor(@Inject('AUTH_PACKAGE') private client: ClientGrpc) { }

  onModuleInit() {
    this.account = this.client.getService<Account.AccountService>('AccountService');
  }

  @Post('register')
  register(dto) {
    console.log('***', dto);
    return firstValueFrom(this.account.register({ email: 'email', password: 'password' }));
  }

  @Post('login')
  login(): Observable<any> {
    return this.account.login({ email: 'email', password: 'password' });
  }
}
