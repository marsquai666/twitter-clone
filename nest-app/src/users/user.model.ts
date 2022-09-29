import { Field, ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';

import { User as UserTable } from '@prisma/client';

@ObjectType({ description: 'ユーザーの基本情報を管理するクラス' })
export class User
  implements
    Omit<
      UserTable,
      'passwordHash' | 'isActive' | 'isActivated' | 'passwordSalt'
    >
{
  @Field((type) => ID, { description: 'ユーザー識別子' })
  id: string;

  @Field()
  email: string;

  // *Password情報はユーザーに対して公開しない
  password: string;

  @Field((type) => GraphQLISODateTime, { description: 'ユーザー作成日時' })
  createdAt: Date;

  @Field((type) => GraphQLISODateTime, { description: '最終ログイン日時' })
  updatedAt: Date;
}
