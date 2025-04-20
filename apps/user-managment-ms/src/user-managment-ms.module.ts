import { Module } from '@nestjs/common';
import { AuthAccesModule } from './auth-acces/auth-acces.module';

@Module({
  imports: [AuthAccesModule],
  controllers: [],
  providers: [],
})
export class UserManagmentMsModule {}
