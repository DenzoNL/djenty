import { Test, TestingModule } from '@nestjs/testing';
import { DjentyController } from './djenty.controller';
import { DjentyService } from './djenty.service';

describe('AppController', () => {
  let djentyController: DjentyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DjentyController],
      providers: [DjentyService],
    }).compile();

    djentyController = app.get<DjentyController>(DjentyController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(djentyController.getHello()).toBe('Hello World!');
    });
  });
});
