import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateDiscussionDto } from './dto/create-discussion.dto';
import { UpdateDiscussionDto } from './dto/update-discussion.dto';
import { CreateDiscussionUseCase } from './usecases/CreateDiscussionUseCase';

@Controller('discussion')
export class DiscussionController {
  constructor(
    private readonly createDiscussionUseCase: CreateDiscussionUseCase,
  ) {}

  @Post()
  create(@Body() createDiscussionDto: CreateDiscussionDto) {
    return this.createDiscussionUseCase.create(
      'Test Question',
      'Sample Description',
    );
  }

  @Get()
  findAll() {
    return this.createDiscussionUseCase.create(
      'Test Question',
      'Sample Description',
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return null;
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDiscussionDto: UpdateDiscussionDto,
  ) {
    return null;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return null;
  }
}
