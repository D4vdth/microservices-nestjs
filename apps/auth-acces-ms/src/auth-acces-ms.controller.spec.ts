import { Test, TestingModule } from '@nestjs/testing';
import { AuthAccesMsController } from './auth-acces-ms.controller';
import { AuthAccesMsService } from './auth-acces-ms.service';

describe('AuthAccesMsController', () => {
  let authAccesMsController: AuthAccesMsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthAccesMsController],
      providers: [AuthAccesMsService],
    }).compile();

    authAccesMsController = app.get<AuthAccesMsController>(AuthAccesMsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(authAccesMsController.getHello()).toBe('Hello World!');
    });
  });
});
