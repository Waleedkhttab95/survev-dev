import { Module } from '@nestjs/common';
import { QuestionAsnwersService } from './question-asnwers.service';
import { QuestionAsnwersController } from './question-asnwers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { questionAnswersModel } from './entities/question-asnwer.entity';
import { SurveyModule } from 'src/survey/survey.module';

@Module({
  imports: [MongooseModule.forFeature([{name: 'questionAnswersModel' , schema:questionAnswersModel}]) , 
  SurveyModule ],
  controllers: [QuestionAsnwersController],
  providers: [QuestionAsnwersService]
})
export class QuestionAsnwersModule {}
