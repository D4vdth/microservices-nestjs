import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthAccesService {
    getAll():string{
        return 'All'
    }
}
