import { join } from 'path';
import { address } from 'ip';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { protobufPackage } from './proto/app';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: address() + ':5000',
      package: protobufPackage, 
      protoPath: join(process.cwd(), './proto/app.proto'),
      loader:{
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
      }
    },
  });
  app.startAllMicroservices();

  await app.listen(3000);
}
bootstrap();
