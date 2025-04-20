import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserManagmentService } from './user-managment.service';

@Controller('user-managment')
export class UserManagmentController {
  constructor(private readonly userManagmentService: UserManagmentService) {}

  @Get()
  findAll() {
    return this.userManagmentService.getAll();
  }

}
