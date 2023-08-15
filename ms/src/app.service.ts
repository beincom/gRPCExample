import * as os from 'os';
import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getHello(): string {
    return `[${os.hostname()}] Say: Hello World!`;
  }
}
