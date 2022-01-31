import { Test, TestingModule } from '@nestjs/testing';
import { QuestionAsnwersService } from './question-asnwers.service';

describe('QuestionAsnwersService', () => {
  let service: QuestionAsnwersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionAsnwersService],
    }).compile();

    service = module.get<QuestionAsnwersService>(QuestionAsnwersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
