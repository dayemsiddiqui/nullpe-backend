import { nanoid } from 'nanoid';

export abstract class Post {
  protected _id: string;

  constructor(protected votes: number, protected description: string) {
    this._id = nanoid();
  }

  protected upvote(): void {
    this.votes = this.votes + 1;
  }

  protected downvote(): void {
    this.votes = this.votes - 1;
  }

  setDescription(value: string): void {
    this.description = value;
  }

  getDescription(value: string): string {
    return this.description;
  }

  get id(): string {
    return this._id;
  }
}
