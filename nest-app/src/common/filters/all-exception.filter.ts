import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

/**
 * 全てのエラーをキャッチするフィルター
 * 処理の中で意図的に発生させたStatusCode指定のエラーについてはHttpExceptionFilterでキャッチされ
 * ここでは想定外のエラーを受け取るイメージである。
 * 想定できるエラーについてはちゃんとtry-catchで
 */
@Catch(Error)
export class AllExceptionFilter implements ExceptionFilter {
  private readonly logger: Logger = new Logger(AllExceptionFilter.name);

  async catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    this.logger.error(exception.stack);

    // TODO: 環境ごとの処理を正しく実装する
    // TODO: production環境ではstatusにメッセージを表示する必要なし

    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message,
    });
  }
}
