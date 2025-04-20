import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserManagmentService {
  constructor(
    @Inject('USER-MANAGMENT_CLIENT') 
    private userManagmentClient: ClientProxy
  ) {}

  getAll() {
    return this.userManagmentClient.send('users-managment.getAll', {});
  }

}
