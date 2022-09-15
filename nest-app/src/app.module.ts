import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuthorsService } from './authors/authors.service';
import { AppResolver } from './app.resolver';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [
    AuthorsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      
      // autoSchemaFile: true
      // typePaths: ['**/*.graphql'],
      // definitions: {
      //   path: join(process.cwd(), 'src/graphql.ts'),
      //   outputAs: 'class'
      // }
    })
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
