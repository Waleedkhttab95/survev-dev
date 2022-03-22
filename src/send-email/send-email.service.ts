import { Injectable, Logger } from '@nestjs/common';
import { CreateSendEmailDto } from './dto/create-send-email.dto';
import { UpdateSendEmailDto } from './dto/update-send-email.dto';
import { Cron } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/mongoose';
import { SurveyDocument } from 'src/survey/entities/survey.entity';
import { Model } from 'mongoose';
import { MailerService } from '@nestjs-modules/mailer';
import { SendGridService } from '@anchan828/nest-sendgrid';

@Injectable()
export class SendEmailService {

  constructor(private readonly sendGrid: SendGridService) {}


  async sendEmail(createSendEmailDto: CreateSendEmailDto) {
   // EXAMPLE FOR SEND EMAIL FUNCTION 

   await this.sendGrid.send({
    to: createSendEmailDto.email,
    from: "no-reply@example.com",
    subject: "الأستبيان الخاص بك جاهز الآن!",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  });

  return true
  }

  




 
}
