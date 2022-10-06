import { Body, Controller, Inject, OnModuleInit, Post } from '@nestjs/common';
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
  register(@Body() dto: { email: string, password: string }) {
    try {
      return firstValueFrom(this.account.register(dto));
    } catch (error) {
      return { ok: false, error }
    }
  }

  @Post('login')
  login(@Body() dto: { email: string, password: string }) {
    return this.account.login(dto);
  }
}
