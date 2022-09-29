import {
  INestApplication,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * データアクセスクラス
 * 初期化処理が呼び出されるようにメソッドを定義
 */
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);

  /**
   * ホストモジュールの依存関係が解決された時点で呼ばれる
   */
  async onModuleInit() {
    // コンソールにログを出力
    this.logger.log(this.onModuleInit.name);

    await this.$connect();
  }

  async enableShutdownHook(app: INestApplication) {
    this.$on('beforeExit', async () => {
      this.logger.log(this.enableShutdownHook.name);

      await app.close();
    });
  }
}
