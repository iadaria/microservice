import { from, lastValueFrom, Observable, of } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { account as Account } from 'proto-schema';
import { AuthService } from './auth.service';

@Controller()
export class AuthController implements Account.AccountService {
  constructor(
    private readonly authService: AuthService
  ) { }

  @GrpcMethod('AccountService', 'Register')
  register(dto: Account.RegisterRequest, meta: Metadata): Observable<Account.RegisterResponse> {
    return from(this.authService.register(dto));
  }

  @GrpcMethod('AccountService', 'Login')
  login(dto: Account.LoginRequest, meta: Metadata): Observable<Account.LoginResponse> {
    return of({
      token: 'token for ' + dto.email,
      tokenType: 'tokenType',
      expiresIn: 4,
      refreshToken: 'refreshtoken',
    });
  }

  @GrpcMethod('AccountService', 'ValidateToken')
  validateToken(data: Account.ValidateTokenRequest, metadata?: Metadata): Observable<Account.ValidateTokenResponse> {
    return null
  }
  @GrpcMethod('AccountService', 'RefreshToken')
  refreshToken(data: Account.RefreshTokenRequest, metadata?: Metadata): Observable<Account.RefreshTokenResponse> {
    return null
  }
}
