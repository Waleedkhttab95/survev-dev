import { Injectable } from '@nestjs/common';
import { CreateSharedLinkServiceDto } from './dto/create-shared-service.dto';
import { SurveyService } from 'src/survey/survey.service';
const shortUrl = require("node-url-shortener");

@Injectable()
export class SharedServicesService {
  constructor(private surveyService: SurveyService) {}

  async createShareLink(createSharedLinkServiceDto: CreateSharedLinkServiceDto) {

    let url = `${process.env.BASE_URL}sharesurvey/${createSharedLinkServiceDto.surveyId}`;

    const shortedUrl = await shortUrl.short(url)

    return shortedUrl;
  }

  async createResultEmail(id: string) {
    let url = `${process.env.BASE_URL}get-result/${id}`;

    let otp = this.createRandomOtp();

    await this.surveyService.addOtpToSurvey(otp , id) ; 
    
    return {
      url,
      otp,
    };
  }

  createRandomOtp() {
    let digits = '0123456789';

    let otpLength = 4;

    let otp = '';

    for (let i = 1; i <= otpLength; i++) {
      let index = Math.floor(Math.random() * digits.length);

      otp = otp + digits[index];
    }

    return otp;
  }

  async getSurveyResult(id: string) {
    let arrOfQuestions = [];
    let arrOfAnswers: {
      question: string;
      answers: string[];
    }[];

    let survey = await this.surveyService.findOne(id);

    arrOfQuestions = survey.questions;

    arrOfQuestions.map((question) => {
      survey.questionsAndAnswers.map((eachQuestion) => {
        let questionAnswers = eachQuestion.answers.filter(
          (answer) => answer.question === question._id,
        );
        let answersArray = questionAnswers.map((eachOne) => eachOne.answer);
        arrOfAnswers.push({
          question: question.question,
          answers: answersArray,
        });
      });
    });

    return {
      AnswersAndQuestions: arrOfAnswers,
      email: survey.email,
    };
  }

  async verifySurveyOtp(otp: string ,id:string) {
    const survey = await this.surveyService.findOne(id) 

    if(survey.otp === otp ) return true
    
     throw new Error('invalid otp')
  }

 async getEndedSurvey() {
  let today = new Date()

  const surveies = await this.surveyService.findByEndDate(today)
  return surveies;
 }

  remove(id: number) {
    return `This action removes a #${id} sharedService`;
  }
}
