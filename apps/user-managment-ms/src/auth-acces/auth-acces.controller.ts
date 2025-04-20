import { Controller } from '@nestjs/common';
import { AuthAccesService } from './auth-acces.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AuthAccesController {
  constructor(private readonly authAccesService: AuthAccesService) {}

  @MessagePattern('users-managment.getAll')
  getAll():string{
    return this.authAccesService.getAll();
  }
}
