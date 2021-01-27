import { Module } from '@nestjs/common';
import { DiscussionController } from './discussion.controller';
import { CreateDiscussionUseCase } from './usecases/CreateDiscussionUseCase';
import { DiscussionRepository } from './repositories/DiscussionRepository';

@Module({
  controllers: [DiscussionController],
  providers: [DiscussionRepository, CreateDiscussionUseCase],
  imports: [],
})
export class DiscussionModule {}
