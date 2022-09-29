import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UsersService } from 'src/users/users.service';

/**
 * システム管理者ユーザーの認証情報の検証を担うService
 */
@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name);

  constructor(
    private UsersService: UsersService,
    private jwtService: JwtService,
  ) {}

  /**
   *
   * @param id
   * @param password
   * @returns
   */
  async validateUser(id: string, password: string): Promise<Partial<User>> {
    // ユーザーのレコード取得
    const systemAdminUser = await this.UsersService.findOne(id);

    if (await this.UsersService.comparePassword(systemAdminUser, password)) {
      const { passwordHash, ...result } = systemAdminUser;
      return result;
    }

    // パスワード比較に失敗した場合にはnullを返す
    return null;
  }

  async login(user: User) {
    const payload = { id: user.id };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
