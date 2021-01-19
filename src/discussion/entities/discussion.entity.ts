import { Answer, Question } from '../../shared';
import { nanoid } from 'nanoid';

export class Discussion {
  private answers: Answer[];
  private _id: string;

  constructor(private question: Question) {
    this._id = nanoid();
  }

  addAnswer(answer: Answer): void {
    this.answers.push(answer);
  }

  getAnswers(): Answer[] {
    return this.answers;
  }

  getAnswerById(id: string): Answer | undefined {
    return this.answers.find((answer) => answer.id === id);
  }

  get id(): string {
    return this._id;
  }
}
