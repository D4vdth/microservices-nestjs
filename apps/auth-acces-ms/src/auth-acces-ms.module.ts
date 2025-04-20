import { Module } from '@nestjs/common';
import { AuthAccesMsController } from './auth-acces-ms.controller';
import { AuthAccesMsService } from './auth-acces-ms.service';

@Module({
  imports: [],
  controllers: [AuthAccesMsController],
  providers: [AuthAccesMsService],
})
export class AuthAccesMsModule {}
