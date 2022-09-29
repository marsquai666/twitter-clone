import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { CreateUserReqBody, CreateUserResBody } from './dto/create-user.dto';
import { LoginUserReqBody } from './dto/login-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body() createUserReqBody: CreateUserReqBody,
  ): Promise<CreateUserResBody> {
    const result = await this.usersService.create(createUserReqBody);

    const { passwordHash, passwordSalt, ...user } = result;

    return user;
  }
}
