import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import {ProductSchema} from './schemas/product.schema';
import {PassportModule} from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema}]),
    PassportModule.register({defaultStrategy: 'jwt'}),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule { }
