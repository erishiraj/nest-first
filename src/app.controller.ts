import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHomeData() {
    return 'Welcome to my page';
  }
}
