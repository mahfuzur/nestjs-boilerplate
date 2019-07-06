import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  private readonly appName: any;
  constructor(config: ConfigService) {
    this.appName = config.appName;
  }
  getHello() {
    return 'Hello world!' + this.appName;
  }
}
