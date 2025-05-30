import { NestFactory } from '@nestjs/core';
import { UserManagmentMsModule } from './user-managment-ms.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserManagmentMsModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3001
      }
    }
  )
  await app.listen();
}
bootstrap();
