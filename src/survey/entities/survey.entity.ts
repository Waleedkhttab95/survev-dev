import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Question } from "src/questions/entities/question.entity";


export type SurveyDocument = Survey & Document;

@Schema()
export class Survey {

    @Prop()
    sequenceId : string
    @Prop({default: ""})
    title: string
    @Prop(raw({
        questionId : String ,

    }))
    customerAnswers : string[] ;
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

}

export const SurveySchema = SchemaFactory.createForClass(Survey);
