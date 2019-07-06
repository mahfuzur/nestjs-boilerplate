import {Body, Controller, Get, Post, Req, Request, UseFilters, UseGuards} from '@nestjs/common';
import {ProductsService} from './products.service';
import {MongoExceptionFilter} from '../exceptions/mongo-exception.filter';
import {AuthGuard} from '@nestjs/passport';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('')
  @UseGuards(AuthGuard())
  findAll(): string {
    return 'hello';
  }

  @Post()
  @UseFilters(MongoExceptionFilter)
  async addProduct(@Req() request: Request,
    // @Body('title') prodTitle: string,
    // @Body('description') prodDesc: string,
    // @Body('price') prodPrice: number,
  ) {
    const generatedId = await this.productsService.create(
      request.body,
    );
    return { id: generatedId };
  }
}
