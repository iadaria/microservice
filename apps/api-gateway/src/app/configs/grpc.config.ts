import { Transport, ClientOptions, ClientsModuleAsyncOptions, RpcException, ClientGrpcProxy } from "@nestjs/microservices";
import { join, dirname } from "path";

const protoModule = require.resolve('proto-schema');

console.log('***', dirname(protoModule) + '/account.proto');

export const getGRPC = (): ClientOptions => ({
	transport: Transport.GRPC,
	options: {
		package: 'account',
		protoPath: join(dirname(protoModule) + '/proto/account.proto'),
	},
})

export const getGRPSClientConfig = (): ClientsModuleAsyncOptions => ([
	{ name: "AUTH_PACKAGE", ...getGRPC() }
]);