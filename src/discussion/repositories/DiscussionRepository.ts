import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Discussion } from '../entities/discussion.entity';
import { DiscussionDatabaseModel } from './DiscussionDatabaseModel';
import { Collection, Db } from 'mongodb';

@Injectable()
export class DiscussionRepository implements OnModuleInit {
  private static COLLECTION_NAME = 'discussions';
  private collection: Collection<DiscussionDatabaseModel>;
  private readonly logger = new Logger(DiscussionRepository.name);

  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: Db,
  ) {}

  onModuleInit(): void {
    this.collection = this.db.collection(DiscussionRepository.COLLECTION_NAME);
  }

  async save(discussion: Discussion): Promise<void> {
    await this.collection.insertOne({
      id: discussion.id,
      question: {
        id: discussion.id,
        title: 'sample question',
        description: 'sample description',
      },
      answer: [],
    });
    this.logger.log(`New Discussion Created With ID: ${discussion.id}`);
  }
}
