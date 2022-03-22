import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurveyModule } from './survey/survey.module';
import { QuestionsModule } from './questions/questions.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionAsnwersModule } from './question-asnwers/question-asnwers.module';
import { SendEmailModule } from './send-email/send-email.module';
import { ScheduleModule } from '@nestjs/schedule';
import { SharedServicesModule } from './shared-services/shared-services.module';
import { TasksModule } from './tasks/tasks.module';
import { SendGridModule } from '@anchan828/nest-sendgrid';
@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true
  }) ,
  MongooseModule.forRoot(process.env.MONGO_URI)
  , 
  SendGridModule.forRoot({
    apikey : process.env.SEND_GRID_API_KEY
  }),
    SurveyModule, 
    QuestionsModule, 
    QuestionAsnwersModule, 
    SendEmailModule ,
    ScheduleModule.forRoot(),
    SharedServicesModule,
    TasksModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
