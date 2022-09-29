import { Field, InputType } from '@nestjs/graphql';
import { Author } from '../models/author.model';

@InputType()
export class CreateAuthorInput implements Omit<Author, 'id' | 'posts'> {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;
}
