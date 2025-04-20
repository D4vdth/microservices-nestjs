import { Injectable } from '@nestjs/common';

@Injectable()
export class UserManagmentMsService {
  getHello(): string {
    return 'Hello World!';
  }
}
