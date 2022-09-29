import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser, GqlAuthGuard } from 'src/auth/gql-auth.guards';
import { JwtAuthRequest } from 'src/auth/jwt-auth.type';
import { PostTweetInput } from './tweet.input';
import { Tweet } from './tweet.model';
import { TweetsService } from './tweets.service';

@Resolver((of) => Tweet)
export class TweetsResolver {
  constructor(private readonly tweetsService: TweetsService) {}

  @Query((returns) => Tweet, {
    description: '指定されたidを識別子に持つツイートを取得',
  })
  async fetchTweet(@Args('id', { type: () => String }) id: string) {
    const result = await this.tweetsService.fetchOne(id);
    return result;
  }

  @Query((returns) => [Tweet], {
    description: '全てのツイートを取得',
  })
  async fetchTweetsAll() {
    const result = await this.tweetsService.fetchAll();

    return result;
  }

  @Mutation((returns) => Tweet)
  @UseGuards(GqlAuthGuard)
  async postTweet(
    @Args('input') input: PostTweetInput,
    @CurrentUser() req: JwtAuthRequest,
  ) {
    const result = await this.tweetsService.create(input, req.user.id);

    return result;
  }
}
