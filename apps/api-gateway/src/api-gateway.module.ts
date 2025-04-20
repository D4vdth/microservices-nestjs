import { Module } from '@nestjs/common';
import { UserManagmentModule } from './user-managment/user-managment.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [UserManagmentModule, InventoryModule],
  controllers: [],
  providers: [],
})
export class ApiGatewayModule {}
