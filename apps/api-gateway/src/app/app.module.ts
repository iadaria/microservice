import { ApolloDriverConfig } from '@nestjs/apollo';
import { getGraphQL } from './configs/graphql.config';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AccountController } from './controllers/account.controller';
import { dirname, join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { AccountResolver } from './controllers/account.resolver';

const protoModule = require.resolve('proto-schema');

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: 'src/environments/.api.env' }),
    GraphQLModule.forRoot<ApolloDriverConfig>(getGraphQL()),
    ClientsModule.register([
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
  providers: [AccountResolver],
})
export class AppModule { }
