import {
  Args,
  ArgsType,
  Context,
  Field,
  Float,
  ID,
  Info,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  ResolveField,
  Resolver,
  Root,
  registerEnumType,
} from '@nestjs/graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { SortOrder } from '../../enums/SortOrder';

@InputType('MydbMaxOrderByAggregateInput', {
  isAbstract: true,
})
export class MydbMaxOrderByAggregateInput {
  @Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @Field((_type) => SortOrder, {
    nullable: true,
  })
  firstname?: 'asc' | 'desc' | undefined;

  @Field((_type) => SortOrder, {
    nullable: true,
  })
  lastname?: 'asc' | 'desc' | undefined;
}
