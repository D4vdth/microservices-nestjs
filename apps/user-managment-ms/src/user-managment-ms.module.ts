import { Module } from '@nestjs/common';
import { UserManagmentMsController } from './user-managment-ms.controller';
import { UserManagmentMsService } from './user-managment-ms.service';

@Module({
  imports: [],
  controllers: [UserManagmentMsController],
  providers: [UserManagmentMsService],
})
export class UserManagmentMsModule {}
