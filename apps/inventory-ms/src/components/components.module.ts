import { Module } from '@nestjs/common';
import { ComponentsService } from './components.service';
import { ComponentsController } from './components.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [ComponentsController],
  providers: [ComponentsService],
})
export class ComponentsModule {}
