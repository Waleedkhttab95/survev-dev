import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Question } from "src/questions/entities/question.entity";
import * as mongoose from 'mongoose';

export type QuestionAnswersDocument = QuestionAnswers & Document;

@Schema()
export class QuestionAnswers {

    @Prop(raw([{
        answer : String ,
        questionId : {type: mongoose.Schema.Types.ObjectId , ref: 'Question'}
    }]))
    answers: Record<string, any>[];

    @Prop()
    createdAt : Date 

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }] })
    survey: string 


}

export const questionAnswersModel = SchemaFactory.createForClass(QuestionAnswers);
