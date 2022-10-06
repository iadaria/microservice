import { GqlModuleOptions } from "@nestjs/graphql";
import { ApolloDriver } from '@nestjs/apollo';

export const getGraphQL = (): GqlModuleOptions => ({
	//installSubscriptionHandlers: true,
	driver: ApolloDriver,
	autoSchemaFile: true,
	context: ({ req, connection }) => {
		//connection && console.log(req, connection.context);
		return {
			token: req ? req.headers['x-jwt'] : connection.context['X-JWT'],
		};
	},
})