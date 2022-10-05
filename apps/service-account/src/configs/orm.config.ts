import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from 'src/user/entities/user.entities';

export const getOrmConfig = (): TypeOrmModuleAsyncOptions => ({
	inject: [ConfigService],
	imports: [ConfigModule],
	useFactory: (configService: ConfigService) => ({
		type: 'postgres',
		url: configService.get('DB_CONNECTION'),
		synchronize: true, // TODO isdev
		entities: [User],
	}),
});