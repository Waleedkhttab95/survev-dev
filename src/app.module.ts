import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurveyModule } from './survey/survey.module';
import { QuestionsModule } from './questions/questions.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionAsnwersModule } from './question-asnwers/question-asnwers.module';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true
  }) ,
  MongooseModule.forRoot(process.env.MONGO_URI)
  , 
    SurveyModule, 
    QuestionsModule, QuestionAsnwersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
