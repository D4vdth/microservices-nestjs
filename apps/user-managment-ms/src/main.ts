import { NestFactory } from '@nestjs/core';
import { UserManagmentMsModule } from './user-managment-ms.module';

async function bootstrap() {
  const app = await NestFactory.create(UserManagmentMsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
