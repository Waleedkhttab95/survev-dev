import { Test, TestingModule } from '@nestjs/testing';
import { SharedServicesController } from './shared-services.controller';
import { SharedServicesService } from './shared-services.service';

describe('SharedServicesController', () => {
  let controller: SharedServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SharedServicesController],
      providers: [SharedServicesService],
    }).compile();

    controller = module.get<SharedServicesController>(SharedServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
