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

@ObjectType('MydbCountAggregate', {
  isAbstract: true,
})
export class MydbCountAggregate {
  @Field((_type) => Int, {
    nullable: false,
  })
  id!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  firstname!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  lastname!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  _all!: number;
}
