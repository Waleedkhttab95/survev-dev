import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { SendEmailService } from 'src/send-email/send-email.service';
import { SharedServicesService } from 'src/shared-services/shared-services.service';
import { SurveyService } from 'src/survey/survey.service';

@Injectable()
export class TasksService {

    constructor(
        private sharedServices : SharedServicesService , 
        private surveyService: SurveyService , 
        private emailService : SendEmailService
    ){}


    @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
   async sendEmailsWithSurveyResult() {
       const allSurveys = await this.sharedServices.getEndedSurvey();
        
      await Promise.all( allSurveys.map(async survey =>{
           let emailDetails = await this.sharedServices.createResultEmail(survey._id.toString())

           // take the details and send by email function here =>

           await this.emailService.sendEmail({
               email : survey.userEmail , 
               otp : emailDetails.otp , 
               url : emailDetails.url
           })

                  // we want here close all ended surveys

                  await this.surveyService.remove(survey._id.toString())
       }) )


     


    }

    
}
