import { Transport, ClientOptions } from "@nestjs/microservices";
import { join, dirname } from "path";

const protoModule = require.resolve('proto-schema')

export const getGRPS = (): ClientOptions => ({
	transport: Transport.GRPC,
	options: {
		package: 'account',
		protoPath: join(dirname(protoModule) + '/proto/account.proto'),

	},
})