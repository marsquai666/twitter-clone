import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './http-exception.filter';
import { AllExceptionFilter } from './all-exception.filter';

/**
 * グローバルのException Filterの登録
 * NOTE: appのuseGlobalFilterを使用してしまうと、DIがいい感じに行えないためここで行う
 * NOTE: DI自体が必要なのかどうなのかは少し微妙
 */
@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class FilterModule {}
