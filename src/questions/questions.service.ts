import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { QuestionDocument } from './entities/question.entity';
import { questionRepository } from './questionRepository';

@Injectable()
export class QuestionsService {

  constructor(
    @InjectModel('QuestionModel') private questionModel : Model<QuestionDocument>
  ){}

  
  async create(createQuestionDto: CreateQuestionDto) {
   
    const createdQuestion = await this.createQuestion(createQuestionDto)
    
    return createdQuestion
  }

  async findAll() {
    return await this.getQuestions()
  }

  async findOne(id: string) {
    return await this.getQuestionById(id)
  }

 async update(id: string, updateQuestionDto: UpdateQuestionDto) {
    return await this.updateQuestion(id, updateQuestionDto);
  }

  async remove(id: string) {
    return await this.deleteQuestion(id);
  }



  async createQuestion(createQuestion :  CreateQuestionDto) {

    const newQuestion = await this.questionModel.create({
        ...createQuestion , 
        createdAt: new Date()
    })

    newQuestion.save()

    return newQuestion._id;
}

async getQuestions() {
    const questions = await this.questionModel.find().sort({"createdAt":-1})

    return questions
}

async getQuestionById(id:string) {

    const question = await this.questionModel.findById(id).sort({"createdAt":-1})

    return question
}

async updateQuestion(id:string , updateQuestion : UpdateQuestionDto){
    const question = await this.questionModel.findByIdAndUpdate(id , updateQuestion , {
        new:true
    })

    return question
}

async deleteQuestion(id:string){
    const question = await this.questionModel.findByIdAndUpdate(id, {
        $set:{
            isDeleted: true
        }
    })

    return question
}
}
