import { Type } from "@nestjs/common";
import { Field, Int, ObjectType } from "@nestjs/graphql";

interface IEdgeType<T> {
  cursor: string;
  node: T;
};

export interface IPaginationType<T> {
  edges: IEdgeType<T>[];
  nodes: T[];
  totalCount: number;
  hasNextPage: boolean;
}

export function Paginated<T>(classDef: Type<T>): Type<IPaginationType<T>> {
  @ObjectType(`${classDef.name}Edge`)
  abstract class EdgeType{
    @Field(type => String)
    cursor: string;

    @Field(type => classDef)
    node: T;
  }

  @ObjectType({isAbstract: true})
  abstract class PaginatedType implements IPaginationType<T> {

    @Field(type => [EdgeType], {nullable: true})
    edges: IEdgeType<T>[];

    @Field(type => [classDef], {nullable: true})
    nodes: T[];

    @Field(type => Int)
    totalCount: number;

    @Field(type => Boolean)
    hasNextPage: boolean;
  }

  return PaginatedType as Type<IPaginationType<T>>;
}
