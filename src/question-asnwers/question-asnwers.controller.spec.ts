import { Test, TestingModule } from '@nestjs/testing';
import { QuestionAsnwersController } from './question-asnwers.controller';
import { QuestionAsnwersService } from './question-asnwers.service';

describe('QuestionAsnwersController', () => {
  let controller: QuestionAsnwersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionAsnwersController],
      providers: [QuestionAsnwersService],
    }).compile();

    controller = module.get<QuestionAsnwersController>(QuestionAsnwersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
