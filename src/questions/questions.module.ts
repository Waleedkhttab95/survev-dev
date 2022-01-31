import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionModel } from './entities/question.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: 'QuestionModel' , schema:QuestionModel}])],
  controllers: [QuestionsController],
  providers: [QuestionsService] , 
  exports:[QuestionsService ,
     MongooseModule.forFeature([{name: 'QuestionModel' , schema:QuestionModel}])]
})
export class QuestionsModule {}
