import { Injectable, Inject} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class InventoryService {

    constructor(
        @Inject('INVENTORY_CLIENT')
        private inventoryClient: ClientProxy
    ){}

    getInventory(){
        return this.inventoryClient.send('inventory.getInventory', {});
    }
}
