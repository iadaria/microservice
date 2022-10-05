import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
// TODO ENV
const GLOBAL_PREFIX = 'api';
const PORT = 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(GLOBAL_PREFIX);
  await app.listen(PORT);
}
bootstrap();
