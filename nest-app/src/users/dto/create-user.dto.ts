import { ApiProperty } from '@nestjs/swagger';

export class CreateUserReqBody {
  @ApiProperty({
    description: 'email',
    default: 'adsfawonbe@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'パスワード',
    default: 'adsfawonbe@0394p9',
  })
  password: string;
}

export class CreateUserResBody {
  id: string;
}
