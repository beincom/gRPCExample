import { credentials } from '@grpc/grpc-js';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppController } from './app.controller';
import { App1Service } from './app.service';
import { APP_PACKAGE_NAME, protobufPackage } from './proto/app';

@Module({
  imports: [
    ClientsModule.register([{
      name: APP_PACKAGE_NAME,
      transport: Transport.GRPC,
      options:{
        credentials: credentials.createInsecure(),
        url: process.env.GRPC_DNS,
        package: protobufPackage,
        protoPath: join(process.cwd(),'./proto/app.proto'),
        keepalive:{
          keepaliveTimeoutMs: 10000,
          keepaliveTimeMs: 5000,
          http2MinTimeBetweenPingsMs: 3000
        },
        loader:{
          keepCase: true,
          longs: String,
          enums: String,
          defaults: true,
          oneofs: true,
        },
        channelOptions:{
          "grpc.service_config": JSON.stringify({load_balancing_config: { round_robin: {} }}),
          "grpc.initial_reconnect_backoff_ms": 5000
        }
      }
    }])
  ],
  controllers: [AppController],
  providers: [App1Service],
})
export class AppModule {}
