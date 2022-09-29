import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserReqBody } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

// ソルトのラウンド
// この値を大きくすることでセキュリティを少し担保できる
// TODO: どこかの定数から取得する
const PASSWORD_SALT_ROUND = 10;

/**
 * Comveyのシステム管理者ユーザーを管理するService
 */
@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  /**
   * システム管理者ユーザーの作成
   * @param createUserReqBody
   * @returns
   */
  async create(createUserReqBody: CreateUserReqBody) {
    const passwordSalt = await this.generatePasswordSalt();
    const passwordHash = await this.generatePasswordHash(
      createUserReqBody.password,
      passwordSalt,
    );
    const result = await this.prismaService.user.create({
      data: {
        email: createUserReqBody.email,
        passwordHash: passwordHash,
        passwordSalt: passwordSalt,
        isActive: true,
        isActivated: true,
      },
    });
    return result;
  }

  /**
   * ユーザーを取得する
   * @param id
   * @param password
   */
  async findOne(id: string): Promise<User> {
    const result = await this.prismaService.user.findUnique({
      where: {
        id_isActive_isActivated: {
          id: id,
          isActive: true,
          isActivated: true,
        },
      },
    });

    return result;
  }

  /**
   * パスワードを比較する
   * @param systemAdminUser
   * @param password
   * @returns
   */
  async comparePassword(
    systemAdminUser: User,
    password: string,
  ): Promise<boolean> {
    const passwordHash = await this.generatePasswordHash(
      password,
      systemAdminUser.passwordSalt,
    );

    return passwordHash === systemAdminUser.passwordHash;
  }

  /**
   * パスワードのハッシュ生成
   * @param password
   * @returns
   */
  private async generatePasswordHash(password: string, passwordSalt: string) {
    return await bcrypt.hash(password, passwordSalt);
  }

  /**
   * ソルトの生成
   * @returns
   */
  private async generatePasswordSalt() {
    return await bcrypt.genSalt(PASSWORD_SALT_ROUND);
  }
}
