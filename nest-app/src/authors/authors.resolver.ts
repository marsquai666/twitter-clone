import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { BaseResolver } from 'src/common/resolver/base-resolver';
import { AuthorsService } from './authors.service';
import { CreateAuthorInput } from './dto/create-author.dto';
import { GetAuthorArgs } from './dto/get-author.dto';
import { Author } from './models/author.model';
import { Post } from './models/post.model';
import { PostsService } from './post.service';

@Resolver(of => Author)
export class AuthorsResolver extends BaseResolver(Author) {
  constructor(private readonly authorsService: AuthorsService, private readonly postsService: PostsService) {
    super();
  }

  @Mutation(returns => Author)
  createAuthor(@Args({name: 'createAuthorInput'}) data: CreateAuthorInput){
    return null;
  }

  @Mutation(returns => Post)
  async upvotePost(@Args({name: 'postId', type: () => Int}) postId: number) {
    return this.postsService.upvote({id: postId});
  }

  @Query(returns => Author, {name: 'author'})
  async getAuthor(@Args('id', {type: () => Int}) id: number){
    return await this.authorsService.findOneById(id);
  }

  // @Query(returns => Author, {name: 'author'})
  // async getAuthorFromName(@Args() args: GetAuthorArgs){
  //   return await this.authorsService.findOneByName(args);
  // }

  @ResolveField('posts', type => [Post])
  async getPosts(@Parent() author: Author) {
    const {id} = author;
    return await this.postsService.findAll(id);
  }
}
