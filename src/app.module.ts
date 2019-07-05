import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsGateway } from './events/events.gateway';
import { EventsModule } from './events/events.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EventsModule,
    AuthModule,
    ConfigModule,
    MongooseModule.forRoot('mongodb://localhost/insta_api')
  ],
  controllers: [AppController],
  providers: [AppService, EventsGateway],
})
export class ApplicationModule { }
