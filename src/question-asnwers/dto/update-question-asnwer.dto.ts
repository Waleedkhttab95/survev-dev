import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionAsnwerDto } from './create-question-asnwer.dto';

export class UpdateQuestionAsnwerDto extends PartialType(CreateQuestionAsnwerDto) {}
