/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Empty } from "../google/protobuf/empty";
import { StringValue } from "../google/protobuf/wrappers";

export const protobufPackage = "app";

export const APP_PACKAGE_NAME = "app";

export interface AppServiceClient {
  getHello(request: Empty): Observable<StringValue>;
}

export interface AppServiceController {
  getHello(request: Empty): Promise<StringValue> | Observable<StringValue> | StringValue;
}

export function AppServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getHello"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("AppService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("AppService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const APP_SERVICE_NAME = "AppService";
