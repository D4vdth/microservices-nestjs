import { Test, TestingModule } from '@nestjs/testing';
import { UserManagmentMsController } from './user-managment-ms.controller';
import { UserManagmentMsService } from './user-managment-ms.service';

describe('UserManagmentMsController', () => {
  let userManagmentMsController: UserManagmentMsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserManagmentMsController],
      providers: [UserManagmentMsService],
    }).compile();

    userManagmentMsController = app.get<UserManagmentMsController>(UserManagmentMsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userManagmentMsController.getHello()).toBe('Hello World!');
    });
  });
});
