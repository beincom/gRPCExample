import { Controller, Get } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { AppServiceController, AppServiceControllerMethods } from './proto/app';
import { AppService } from './app.service';
import { Empty } from './google/protobuf/empty';
import { StringValue } from './google/protobuf/wrappers';

@Controller()
@AppServiceControllerMethods()
export class AppController implements AppServiceController {
  constructor(private readonly appService: AppService) {}

  getHello(request: Empty): StringValue {
    return  {
      value: this.appService.getHello()
    };
  }
}
