import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return {
      dbname: process.env.DB_NAME,
      mongoURI: process.env.MONGO_URI,
    };
  }
}
