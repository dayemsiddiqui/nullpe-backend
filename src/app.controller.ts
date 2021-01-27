import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get()
  getHello(): any {
    return {
      dbname: this.configService.get<string>('database.name'),
      mongoURI: this.configService.get<string>('database.uri'),
      status: 'fuck up',
    };
  }
}
