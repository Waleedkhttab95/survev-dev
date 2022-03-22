import { Module } from '@nestjs/common';
import { SendEmailService } from './send-email.service';
import { SendEmailController } from './send-email.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SurveySchema } from 'src/survey/entities/survey.entity';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';


@Module({
  imports: [
    ],
  controllers: [SendEmailController],
  providers: [SendEmailService] ,
  exports : [SendEmailService]
})
export class SendEmailModule {}
