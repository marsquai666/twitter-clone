import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { PostsService } from './post.service';

@Module({
  providers: [AuthorsResolver, AuthorsService, PostsService],
  exports: [AuthorsResolver],
})
export class AuthorsModule {}
