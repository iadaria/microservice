import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { getOrmConfig } from './configs/orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: 'src/environments/.account.env' }),
    AuthModule,
    UserModule,
    TypeOrmModule.forRootAsync(getOrmConfig()),
  ]
})
export class AppModule { }
