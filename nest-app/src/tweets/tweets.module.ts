import { Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsResolver } from './tweets.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TweetsResolver, TweetsService],
})
export class TweetsModule {}
