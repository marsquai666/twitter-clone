import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

/**
 * Passportに使用するId、Passwordの認証
 * Login時に使用
 */
@Injectable()
export class LocalAuthStrategy extends PassportStrategy(Strategy) {
  private logger = new Logger(LocalAuthStrategy.name);
  constructor(private authService: AuthService) {
    /**
     * 認証に使用するキーを
     * { username: string, password: string }
     * から
     * { id: string, password: string }
     */
    super({ usernameField: 'id' });
  }

  /**
   *
   * @param username
   * @param password
   * @returns
   */
  async validate(id: string, password: string): Promise<Partial<User>> {
    const user = await this.authService.validateUser(id, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
