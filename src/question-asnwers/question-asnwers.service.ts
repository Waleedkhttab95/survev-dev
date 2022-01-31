import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SurveyService } from 'src/survey/survey.service';
import { CreateQuestionAsnwerDto } from './dto/create-question-asnwer.dto';
import { UpdateQuestionAsnwerDto } from './dto/update-question-asnwer.dto';
import { QuestionAnswersDocument } from './entities/question-asnwer.entity';
import { questionAnswersRepo } from './questionAnswersRepository';

@Injectable()
export class QuestionAsnwersService {

  constructor(
    @InjectModel('questionAnswersModel') private questionAnswersModel : Model<QuestionAnswersDocument> ,
    private surveyServices : SurveyService
  ){}


  async create(createQuestionAsnwerDto: CreateQuestionAsnwerDto) {
    const newRecord =  await this.createEntity(createQuestionAsnwerDto);
    await this.surveyServices.addNewAnswersToSurvey(createQuestionAsnwerDto.survey , newRecord._id)

    return newRecord
  }

  findAll() {
    return `This action returns all questionAsnwers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} questionAsnwer`;
  }

  update(id: number, updateQuestionAsnwerDto: UpdateQuestionAsnwerDto) {
    return `This action updates a #${id} questionAsnwer`;
  }

  remove(id: number) {
    return `This action removes a #${id} questionAsnwer`;
  }

        
  async createEntity(createQuestionAnswers: CreateQuestionAsnwerDto) {

    const newQuestionAnswers = await this.questionAnswersModel.create({
        ...createQuestionAnswers , 
        createdAt: new Date()
    })

    await newQuestionAnswers.save()

    return newQuestionAnswers
}
}
