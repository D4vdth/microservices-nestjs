import { NestFactory } from '@nestjs/core';
import { AuthAccesMsModule } from './auth-acces-ms.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthAccesMsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
