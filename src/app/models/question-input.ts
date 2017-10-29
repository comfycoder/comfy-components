export class QuestionInput {

    questionName: string;
    questionText: string;
    helpText: string;

    constructor(
        questionName: string,
        questionText: string,
        helpText: string
    ) {
        this.questionName = questionName;
        this.questionText = questionText;
        this.helpText = helpText;
    }
}
