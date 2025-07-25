import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { FindBooksQueryDto } from './dto/findAll-book.dto';
import { SearchBooksQueryDto } from './dto/search-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('search')
  search(@Query() searchBooksQueryDto: SearchBooksQueryDto) {
    return this.booksService.search(searchBooksQueryDto);
  }

  @Get()
  findAll(@Query() findBooksQueryDto: FindBooksQueryDto) {
    return this.booksService.findAll(findBooksQueryDto);
  }

  @Get(':isbn')
  findOne(@Param('isbn') isbn: string) {
    return this.booksService.findOne(isbn);
  }
}
