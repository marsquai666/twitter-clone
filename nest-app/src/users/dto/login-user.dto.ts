import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginUserReqBody {
  @ApiProperty({ type: 'string', default: 'jhon' })
  @IsString()
  id: string;

  @ApiProperty({ type: 'string', default: 'jhon36660' })
  @IsString()
  password: string;
}

export class LoginUserResBody {}
