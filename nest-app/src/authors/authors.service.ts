import { Injectable } from '@nestjs/common';
import { GetAuthorArgs } from './dto/get-author.dto';
import { Author } from './models/author.model';

@Injectable()
export class AuthorsService {

  async findOneById(id: number){
    const author = new Author();
    author.id = 1;
    author.firstName = 'aki';
    author.lastName = 'ogi';
    author.posts = [];

    return author;
  }

  async findOneByName(args: GetAuthorArgs){
    const author = new Author();
    author.id = 1;
    author.firstName = 'aki';
    author.lastName = 'ogi';
    author.posts = [];

    return author;
  }

  
}
