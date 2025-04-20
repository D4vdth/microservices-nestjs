import { Module } from '@nestjs/common';
import { UserManagmentService } from './user-managment.service';
import { UserManagmentController } from './user-managment.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER-MANAGMENT_CLIENT',
        transport: Transport.TCP,
        options: { port: 3001 }
      }
    ])
  ],
  controllers: [UserManagmentController],
  providers: [UserManagmentService],
})
export class UserManagmentModule { }
