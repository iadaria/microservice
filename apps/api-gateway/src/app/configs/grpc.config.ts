import { Transport, ClientOptions, ClientsModuleAsyncOptions } from "@nestjs/microservices";
import { join, dirname } from "path";

const protoModule = require.resolve('proto-schema');

console.log('***', dirname(protoModule) + '/account.proto');

export const getGRPS = (): ClientOptions => ({
	transport: Transport.GRPC,
	options: {
		package: 'account',
		protoPath: join(dirname(protoModule) + '/account.proto'),
	},
})

export const getGRPSClientConfig = (): ClientsModuleAsyncOptions => ([
	{ name: "AUTH_PACKAGE", ...getGRPS() }
]);