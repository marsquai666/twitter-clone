import { Field, ObjectType } from '@nestjs/graphql';
import { Tweet as TweetTable } from '@prisma/client';

@ObjectType({ description: 'ユーザーが投稿したツイート' })
export class Tweet implements TweetTable {
  @Field()
  id: string;
  @Field()
  text: string;
  @Field()
  favoriteCount: number;
  @Field()
  replyCount: number;
  @Field()
  retweetCount: number;
  @Field()
  isDeleted: boolean;
  @Field()
  authorId: string;
  @Field({ nullable: true })
  retweetTargetId: string;
  @Field({ nullable: true })
  replyTargetId: string;
}
