import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { QuestionsService } from 'src/questions/questions.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { SurveyDocument } from './entities/survey.entity';

@Injectable()
export class SurveyService {

  constructor(
   @InjectModel('surveyModel') private surveyModel : Model<SurveyDocument>,
    private questionService : QuestionsService ,


  ){}

  async create(createSurveyDto: CreateSurveyDto) {
    let AllQuestionsInOneArray =[]

  await Promise.all( createSurveyDto.questions.map(async question =>{
      let newQuestion = await this.questionService.create(question)

      AllQuestionsInOneArray.push(newQuestion)

    })
  )
    createSurveyDto.questions = AllQuestionsInOneArray 

    	// generate new sequence id
		const surveyCount = await this.countOfSurveys();
		let newSequenceId;
		if (surveyCount == 0) {
			newSequenceId = (surveyCount + 1 + "").padStart(4, "0");
		}

    const newSurvey = await this.createEntity(createSurveyDto , newSequenceId)
    return newSurvey
  }

  findAll() {
    return `This action returns all survey`;
  }

  async findOne(id: string) {
    const survey = await this.findOneEntity(id)
    return this.surveyFormat(survey);
  }

  update(id: number, updateSurveyDto: UpdateSurveyDto) {
    return `This action updates a #${id} survey`;
  }

  async remove(id: string) {
    return await this.removeEntity(id);
  }

  surveyFormat(survey : SurveyDocument) {
    return {
      _id: survey.sequenceId ,
      questions: survey.questions , 
      createdAt :  survey.createdAt , 

    }
  }

  async countOfSurveys() {
    return await this.surveyModel.countDocuments()
}

   async createEntity(createSurveyDto:CreateSurveyDto , sequenceId: string) {

        const survey = await this.surveyModel.create({
            ...createSurveyDto , 
            sequenceId: sequenceId ,
            questions: createSurveyDto.questions, 
            createdAt: new Date() , 
            isActive: true , 
            numberOfResponses: 0
        })

        survey.save()

        return survey
      }


      async findOneEntity(id: string) {
        const survey = await this.surveyModel.findById(id)
        .populate('questions')

        
        return survey
      }

        async removeEntity(id:string){
          return await this.surveyModel.findByIdAndUpdate(id, {
              $set:{
                  isActive: false 
              }
          }, {new: true})
      }

      async addNewAnswersToSurvey(surveyId: string , answersId : Types.ObjectId) {
        const survey = await this.surveyModel.findByIdAndUpdate(surveyId , {
          $push: {customerAnswers : answersId}
        } , {new: true})

        return survey
      }
}
