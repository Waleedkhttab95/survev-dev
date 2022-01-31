

export class surveyRepository{

    // constructor(
    //     @InjectModel('SurveyModel') private surveyModel : Model<SurveyDocument>
    //   ){}

    //   async create(createSurveyDto:CreateSurveyDto , sequenceId: string) {

    //     const survey = await this.surveyModel.create({
    //         ...createSurveyDto , 
    //         sequenceId: sequenceId ,
    //         createdAt: new Date() , 
    //         isActive: true , 
    //         numberOfResponses: 0
    //     })

    //     survey.save()

    //     return survey
    //   }

    //   async findOne(id: string) {
    //     const survey = await this.surveyModel.findById(id)
    //     .populate('questions')

        
    //     return survey
    //   }

    //   async countOfSurveys() {
    //       return await this.surveyModel.countDocuments()
    //   }

    //   async remove(id:string){
    //       return await this.surveyModel.findByIdAndUpdate(id, {
    //           $set:{
    //               isActive: false 
    //           }
    //       }, {new: true})
    //   }
}