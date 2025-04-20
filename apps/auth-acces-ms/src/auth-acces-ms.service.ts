import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthAccesMsService {
  getHello(): string {
    return 'Hello World!';
  }
}
