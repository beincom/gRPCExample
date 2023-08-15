import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { StringValue } from './google/protobuf/wrappers';
import { AppServiceClient, APP_PACKAGE_NAME, APP_SERVICE_NAME } from './proto/app';

@Injectable()
export class App1Service implements OnModuleInit {
  private appService: AppServiceClient;
  
  constructor(@Inject(APP_PACKAGE_NAME) private readonly client: ClientGrpc) {

  }
  onModuleInit() {
    this.appService = this.client.getService<AppServiceClient>(APP_SERVICE_NAME);
  }
  getHello1(): Promise<StringValue> {
    return lastValueFrom(this.appService.getHello({}));
  }
}
