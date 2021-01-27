import { Module } from '@nestjs/common';
import { DiscussionController } from './discussion.controller';
import { CreateDiscussionUseCase } from './usecases/CreateDiscussionUseCase';
import { DiscussionRepository } from './repositories/DiscussionRepository';
import { DatabaseModule } from '../shared/infra/database.module';

@Module({
  controllers: [DiscussionController],
  providers: [DiscussionRepository, CreateDiscussionUseCase],
  imports: [DatabaseModule],
})
export class DiscussionModule {}
