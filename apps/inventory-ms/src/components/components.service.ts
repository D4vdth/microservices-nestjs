import { Injectable } from '@nestjs/common';

@Injectable()
export class ComponentsService {
    getInventory():string{
        return 'Inventory'
    }
}
