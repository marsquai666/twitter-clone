import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Paginated } from 'src/common/model/pagination.model';
import { Post } from './post.model';

@ObjectType()
export class Author {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field((type) => [Post])
  posts: Post[];
}

@ObjectType()
export class PaginatedAuthor extends Paginated(Author) {}
