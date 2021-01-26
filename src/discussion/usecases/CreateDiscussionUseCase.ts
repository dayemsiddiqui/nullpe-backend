import { Discussion } from '../entities/discussion.entity';
import { Question } from '../../shared';
import { Injectable } from '@nestjs/common';
import { DiscussionRepository } from '../repositories/DiscussionRepository';

@Injectable()
export class CreateDiscussionUseCase {
  constructor(private readonly discussionRepository: DiscussionRepository) {}

  async create(title: string, description: string): Promise<void> {
    const question = new Question(title, description);
    const discussion = new Discussion(question);
    await this.discussionRepository.save(discussion);
  }
}
