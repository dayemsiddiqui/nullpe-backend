import { Post } from './Post';

export class Question extends Post {
  constructor(private title: string, readonly description: string) {
    super(0, description);
  }

  setTitle(value: string): void {
    this.title = value;
  }

  getTitle(value: string): string {
    return this.title;
  }

}
