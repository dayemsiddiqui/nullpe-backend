import { Post } from './Post';

export class Answer extends Post {
  constructor(readonly description: string) {
    super(0, description);
  }
}
