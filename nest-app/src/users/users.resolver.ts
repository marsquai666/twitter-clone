import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user.model';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  // メソッド
  @Query((returns) => User)
  async getUser() {
    const user = new User();

    return user;
  }
}
