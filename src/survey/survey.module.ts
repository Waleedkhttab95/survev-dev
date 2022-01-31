import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsService } from 'src/questions/questions.service';
import { QuestionsModule } from 'src/questions/questions.module';
import { SurveySchema } from './entities/survey.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: 'surveyModel' , schema:SurveySchema}]) , 
  QuestionsModule],
  controllers: [SurveyController],
  providers: [SurveyService] ,
  exports: [SurveyService]
})
export class SurveyModule {}
