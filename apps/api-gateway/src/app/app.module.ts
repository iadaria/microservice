import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AccountController } from './controllers/account.controller';
import { dirname, join } from 'path';

const protoModule = require.resolve('proto-schema');

@Module({
  imports: [ClientsModule.register([
    {
      name: 'AUTH_PACKAGE',
      transport: Transport.GRPC,
      options: {
        package: 'account',
        protoPath: join(dirname(protoModule) + '/proto/account.proto'),
      },
    },
  ]),],
  controllers: [AccountController],
  providers: [],
})
export class AppModule { }
