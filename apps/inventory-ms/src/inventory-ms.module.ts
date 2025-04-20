import { Module } from '@nestjs/common';
import { ComponentsModule } from './components/components.module';

@Module({
  imports: [ComponentsModule],
  controllers: [],
  providers: [],
})
export class InventoryMsModule {}
