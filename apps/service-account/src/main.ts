import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getGRPS } from './configs/grpc.config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(getGRPS());
  await app.startAllMicroservices();
  //await app.listen(3000);
}
bootstrap();
