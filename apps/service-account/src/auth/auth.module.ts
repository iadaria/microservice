import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { getJWTConfig } from 'src/configs/jwt.config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from 'src/user/entities/user.entities';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [JwtModule.registerAsync(getJWTConfig()), TypeOrmModule.forFeature([User])],
  controllers: [AuthController, UserService],
  providers: [AuthService, JwtService]
})
export class AuthModule { }
