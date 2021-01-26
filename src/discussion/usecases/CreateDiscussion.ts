import { Discussion } from '../entities/discussion.entity';
import { Question } from '../../shared';

export class CreateDiscussion {
  create(title: string, description: string): void {
    const question = new Question(title, description);
    const discussion = new Discussion(question);
  }
}
