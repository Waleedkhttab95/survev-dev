import { Module } from '@nestjs/common';
import { SharedServicesService } from './shared-services.service';
import { SharedServicesController } from './shared-services.controller';
import { SurveyModule } from 'src/survey/survey.module';

@Module({
  imports:[SurveyModule] , 
  controllers: [SharedServicesController],
  providers: [SharedServicesService]  ,
  exports: [SharedServicesService]

})
export class SharedServicesModule {}
