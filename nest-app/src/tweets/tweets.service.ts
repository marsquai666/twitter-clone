import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostTweetInput } from './tweet.input';

@Injectable()
export class TweetsService {
  constructor(private readonly prismaService: PrismaService) {}

  async fetchOne(id: string) {
    return await this.prismaService.tweet.findUnique({ where: { id: id } });
  }

  async fetchAll() {
    return await this.prismaService.tweet.findMany();
  }

  async create(postTweetInput: PostTweetInput, authorId: string) {
    return await this.prismaService.tweet.create({
      data: {
        text: postTweetInput.text,
        favoriteCount: 0,
        replyCount: 0,
        retweetCount: 0,
        isDeleted: false,
        authorId: authorId,
      },
    });
  }
}
