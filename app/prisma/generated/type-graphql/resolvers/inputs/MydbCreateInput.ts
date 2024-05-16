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

@InputType('MydbCreateInput', {
  isAbstract: true,
})
export class MydbCreateInput {
  @Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @Field((_type) => String, {
    nullable: true,
  })
  firstname?: string | undefined;

  @Field((_type) => String, {
    nullable: true,
  })
  lastname?: string | undefined;
}
