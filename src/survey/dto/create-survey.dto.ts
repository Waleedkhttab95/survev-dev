import { CreateQuestionDto } from "src/questions/dto/create-question.dto"

export class CreateSurveyDto {
    questions: CreateQuestionDto[] 
    userEmail: string 
    expireDate: Date
    title?: string

}
