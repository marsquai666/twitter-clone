import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginAccountReqBody {
  @ApiProperty({ type: 'string', default: 'jhon' })
  @IsString()
  id: string;

  @ApiProperty({ type: 'string', default: 'adsfawonbe@0394p9' })
  @IsString()
  password: string;
}

export class LoginAccountResBody {}
