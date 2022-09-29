import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { JwtAuthRequest } from 'src/auth/jwt-auth.type';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AccountsService } from './accounts.service';
import { LoginAccountReqBody } from './dto/login-account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(
    private readonly accountsService: AccountsService,
    private authService: AuthService,
  ) {}

  @ApiBody({ type: LoginAccountReqBody })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() request) {
    return this.authService.login(request.user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: JwtAuthRequest) {
    return req.user;
  }
}
