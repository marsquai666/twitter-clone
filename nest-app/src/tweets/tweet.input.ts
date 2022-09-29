import { Field, InputType } from '@nestjs/graphql';
import { Tweet } from './tweet.model';

@InputType()
export class PostTweetInput implements Pick<Tweet, 'text' | 'authorId'> {
  authorId: string;
  @Field()
  text: string;
}
