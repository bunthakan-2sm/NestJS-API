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
import { MydbCreateInput } from '../../../inputs/MydbCreateInput';
import { MydbUpdateInput } from '../../../inputs/MydbUpdateInput';
import { MydbWhereUniqueInput } from '../../../inputs/MydbWhereUniqueInput';

@ArgsType()
export class UpsertOneMydbArgs {
  @Field((_type) => MydbWhereUniqueInput, {
    nullable: false,
  })
  where!: MydbWhereUniqueInput;

  @Field((_type) => MydbCreateInput, {
    nullable: false,
  })
  create!: MydbCreateInput;

  @Field((_type) => MydbUpdateInput, {
    nullable: false,
  })
  update!: MydbUpdateInput;
}
