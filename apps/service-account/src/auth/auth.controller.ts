import { Observable, of } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { account as Account } from 'proto-schema';

@Controller()
export class AuthController implements Account.AccountService {

  @GrpcMethod('AccountService', 'Create')
  create(dto: Account.CreateRequest, meta: Metadata): Observable<Account.CreateResponse> {
    return of({ id: 'id', email: dto.email, isBlicked: false });
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
