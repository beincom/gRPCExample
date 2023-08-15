import { Controller, Get } from '@nestjs/common';
import { App1Service } from './app.service';
import { StringValue } from './google/protobuf/wrappers';

@Controller()
export class AppController {
  constructor(private readonly app1Service: App1Service) {}

  @Get()
  getHello(): Promise<StringValue> {
    return this.app1Service.getHello1();
  }
}
