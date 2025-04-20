import { Controller, Get } from '@nestjs/common';
import { AuthAccesMsService } from './auth-acces-ms.service';

@Controller()
export class AuthAccesMsController {
  constructor(private readonly authAccesMsService: AuthAccesMsService) {}

  @Get()
  getHello(): string {
    return this.authAccesMsService.getHello();
  }
}
