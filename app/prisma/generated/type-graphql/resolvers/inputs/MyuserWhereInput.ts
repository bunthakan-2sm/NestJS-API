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
import { StringFilter } from '../inputs/StringFilter';
import { StringNullableFilter } from '../inputs/StringNullableFilter';

@InputType('MyuserWhereInput', {
  isAbstract: true,
})
export class MyuserWhereInput {
  @Field((_type) => [MyuserWhereInput], {
    nullable: true,
  })
  AND?: MyuserWhereInput[] | undefined;

  @Field((_type) => [MyuserWhereInput], {
    nullable: true,
  })
  OR?: MyuserWhereInput[] | undefined;

  @Field((_type) => [MyuserWhereInput], {
    nullable: true,
  })
  NOT?: MyuserWhereInput[] | undefined;

  @Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter | undefined;

  @Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  password?: StringNullableFilter | undefined;

  @Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  first_name?: StringNullableFilter | undefined;

  @Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  last_name?: StringNullableFilter | undefined;

  @Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  refresh_token?: StringNullableFilter | undefined;
}
