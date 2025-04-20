import { Module } from '@nestjs/common';
import { AuthAccesService } from './auth-acces.service';
import { AuthAccesController } from './auth-acces.controller';

@Module({
  controllers: [AuthAccesController],
  providers: [AuthAccesService],
})
export class AuthAccesModule {}
