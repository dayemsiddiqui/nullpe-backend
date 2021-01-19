import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DiscussionModule } from './discussion/discussion.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DiscussionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
