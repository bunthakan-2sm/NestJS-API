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

@ObjectType('MyuserMaxAggregate', {
  isAbstract: true,
})
export class MyuserMaxAggregate {
  @Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @Field((_type) => String, {
    nullable: true,
  })
  email!: string | null;

  @Field((_type) => String, {
    nullable: true,
  })
  password!: string | null;

  @Field((_type) => String, {
    nullable: true,
  })
  first_name!: string | null;

  @Field((_type) => String, {
    nullable: true,
  })
  last_name!: string | null;

  @Field((_type) => String, {
    nullable: true,
  })
  refresh_token!: string | null;
}
