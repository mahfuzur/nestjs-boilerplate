import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { Product } from './interfaces/product.interface';
// import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private readonly productModel: Model<any>) {}

  async create(createProductDto: any): Promise<any> {
    console.log("createProductDto", createProductDto);
    const createdProduct = new this.productModel(createProductDto);
    return await createdProduct.save();
  }

  async findAll(): Promise<any[]> {
    return await this.productModel.find().exec();
  }
}
