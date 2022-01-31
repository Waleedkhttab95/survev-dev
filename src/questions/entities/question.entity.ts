import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';

export type QuestionDocument = Question & Document;

export enum questionTypes {
  'MC', // multiple choices
  'TF', // true or false
  'TXT', // write text
  'OC', // one choice (single select) ,
  'RT', // Rating
}

@Schema()
export class Question {
  @Prop({ required: true })
  question: string;

  @Prop({ required: true })
  questionType: string;

  @Prop([String])
  choices: string[];

  @Prop({ required: true })
  orderSort: string;

  // @Prop()
  // answers: string;

  @Prop({default: false})
  isDeleted: Boolean

  @Prop()
  createdAt: Date;
}

export const QuestionModel = SchemaFactory.createForClass(Question);
