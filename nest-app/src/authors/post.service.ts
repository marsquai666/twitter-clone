import { Injectable } from '@nestjs/common';
import { Post } from './models/post.model';

@Injectable()
export class PostsService {
  async findAll(authorId: number) {
    const posts = new Array<Post>();
    posts.push({
      id: 1,
      title: "Marsquai's favorite songs",
      votes: 0,
      created: new Date(),
    });
    posts.push({
      id: 2,
      title: "Marsquai's favorite ",
      votes: 0,
      created: new Date(),
    });

    return posts;
  }

  async upvote(args: Pick<Post, 'id'>) {
    const post = new Post();
    post.id = args.id;
    post.title = 'upvoted post';
    post.votes = 100;
    post.created = new Date();

    return post;
  }
}
