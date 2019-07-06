import { Module } from '@nestjs/common';
import {MongoExceptionFilter} from './mongo-exception.filter';
import {ErrorFilter} from './error.filter';

@Module({
  providers: [MongoExceptionFilter, ErrorFilter],
})
export class ExceptionsModule {}
