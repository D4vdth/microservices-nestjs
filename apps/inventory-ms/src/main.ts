import { NestFactory } from '@nestjs/core';
import { InventoryMsModule } from './inventory-ms.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    InventoryMsModule,
    {
      transport:Transport.TCP,
      options:{
        port:3002
      }
    }
  )

  // const app = await NestFactory.create(InventoryMsModule);
  await app.listen();
}
bootstrap();
