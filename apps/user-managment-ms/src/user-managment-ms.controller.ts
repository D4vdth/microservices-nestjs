import { Controller, Get } from '@nestjs/common';
import { UserManagmentMsService } from './user-managment-ms.service';

@Controller()
export class UserManagmentMsController {
  constructor(private readonly userManagmentMsService: UserManagmentMsService) {}

  @Get()
  getHello(): string {
    return this.userManagmentMsService.getHello();
  }
}
