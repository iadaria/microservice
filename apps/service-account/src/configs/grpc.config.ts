import { Transport, ClientOptions } from "@nestjs/microservices";
import { join, dirname } from "path";

const protoModule = require.resolve('proto-schema')

export const getGRPS = (): ClientOptions => ({
	transport: Transport.GRPC,
	options: {
		package: 'aw.account',
		protoPath: join(dirname(protoModule) + 'account.proto'),

	},
})