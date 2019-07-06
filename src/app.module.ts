import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsGateway } from './events/events.gateway';
import { EventsModule } from './events/events.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { MongooseModule } from '@nestjs/mongoose';
import {ProductsModule} from './products/products.module';
import { ExceptionsModule } from './exceptions/exceptions.module';

@Module({
  imports: [
    EventsModule,
    AuthModule,
    ConfigModule,
    MongooseModule.forRoot('mongodb://localhost/insta_api', { useNewUrlParser: true } ),
    ProductsModule,
    ExceptionsModule,

  ],
  controllers: [AppController],
  providers: [AppService, EventsGateway],
})
export class ApplicationModule { }
