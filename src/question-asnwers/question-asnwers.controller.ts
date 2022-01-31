import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionAsnwersService } from './question-asnwers.service';
import { CreateQuestionAsnwerDto } from './dto/create-question-asnwer.dto';
import { UpdateQuestionAsnwerDto } from './dto/update-question-asnwer.dto';

@Controller('question-asnwers')
export class QuestionAsnwersController {
  constructor(private readonly questionAsnwersService: QuestionAsnwersService) {}

  @Post()
  create(@Body() createQuestionAsnwerDto: CreateQuestionAsnwerDto) {
    return this.questionAsnwersService.create(createQuestionAsnwerDto);
  }

  @Get()
  findAll() {
    return this.questionAsnwersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionAsnwersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuestionAsnwerDto: UpdateQuestionAsnwerDto) {
    return this.questionAsnwersService.update(+id, updateQuestionAsnwerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionAsnwersService.remove(+id);
  }
}
