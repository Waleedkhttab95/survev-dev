import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { SharedServicesModule } from 'src/shared-services/shared-services.module';
import { SurveyModule } from 'src/survey/survey.module';
import { SendEmailModule } from 'src/send-email/send-email.module';

@Module({
  controllers: [TasksController],
  providers: [TasksService] , 
  imports: [SharedServicesModule , SurveyModule , SendEmailModule]
})
export class TasksModule {}
