import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  private appName: string;
  constructor(config: ConfigService) {
    this.appName = config.get('APP_NAME')
  }
  getHello() {
    return 'Hello world! ' + this.appName;
  }
}
