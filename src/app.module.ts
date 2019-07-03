import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsGateway } from './events/events.gateway';
import { EventsModule } from './events/events.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [EventsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, EventsGateway],
})
export class ApplicationModule { }
