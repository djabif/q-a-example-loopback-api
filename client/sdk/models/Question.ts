/* tslint:disable */

declare var Object: any;
export interface QuestionInterface {
  "question": any;
  "negativeVotes"?: any;
  "positiveVotes"?: any;
  "id"?: any;
}

export class Question implements QuestionInterface {
  "question": any;
  "negativeVotes": any;
  "positiveVotes": any;
  "id": any;
  constructor(data?: QuestionInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Question`.
   */
  public static getModelName() {
    return "Question";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Question for dynamic purposes.
  **/
  public static factory(data: QuestionInterface): Question{
    return new Question(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Question',
      plural: 'Questions',
      properties: {
        "question": {
          name: 'question',
          type: 'any'
        },
        "negativeVotes": {
          name: 'negativeVotes',
          type: 'any',
          default: 0
        },
        "positiveVotes": {
          name: 'positiveVotes',
          type: 'any',
          default: 0
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
