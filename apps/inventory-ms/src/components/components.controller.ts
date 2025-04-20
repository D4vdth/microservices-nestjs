import { Controller } from '@nestjs/common';
import { ComponentsService } from './components.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ComponentsController {
  constructor(private readonly componentsService: ComponentsService) {}

  @MessagePattern('inventory.getInventory')
  getInventory():string{
    return this.componentsService.getInventory();
  }
}
