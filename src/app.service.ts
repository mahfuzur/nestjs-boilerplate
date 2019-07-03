import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  private appName: any;
  constructor(config: ConfigService) {
    this.appName = config.appName
  }
  getHello() {
    return 'Hello world! new ' + this.appName;
  }
}
