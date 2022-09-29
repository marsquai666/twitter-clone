import { MinLength } from 'class-validator';
import { Field, ArgsType } from '@nestjs/graphql';
import { PaginationArgs } from 'src/common/dto/pagination-args.dto';

@ArgsType()
export class GetAuthorArgs extends PaginationArgs {
  @Field({ nullable: true, description: '名前' })
  firstName?: string;

  @Field({ defaultValue: '', description: '苗字' })
  @MinLength(3)
  lastName: string;
}
