import { Type } from "@nestjs/common";
import { Query, Resolver } from "@nestjs/graphql";

export function BaseResolver<T extends Type<unknown>>(classDef: T): any {
  
  @Resolver({isAbstract: true})
  abstract class BaseResolverHost {

    @Query((type) => [classDef], { name: `findAll${classDef.name}`})
    async findAll(): Promise<T[]>{
      return [];
    }
  }

  return BaseResolverHost;
}