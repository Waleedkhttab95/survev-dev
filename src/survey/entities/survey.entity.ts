import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { QuestionAnswers } from "src/question-asnwers/entities/question-asnwer.entity";
import { Question } from "src/questions/entities/question.entity";


export type SurveyDocument = Survey & Document;

@Schema()
export class Survey {

    @Prop()
    sequenceId : string
    @Prop({default: ""})
    title: string
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'QuestionAnswers' }] })
    customerAnswers : QuestionAnswers[] ;
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'QuestionModel' }] })
    questions : string[] ;
    @Prop({ required: true })
    userEmail: string ;
    @Prop()
    createdAt: Date ;
    @Prop()
    expireDate : Date ;
    @Prop()
    isActive: Boolean ;
    @Prop({ default: 0 })
    numberOfResponses : Number ;
    @Prop({default: null})
    otp : string
}

export const SurveySchema = SchemaFactory.createForClass(Survey);
