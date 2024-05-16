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
import { MydbUpdateInput } from '../../../inputs/MydbUpdateInput';
import { MydbWhereUniqueInput } from '../../../inputs/MydbWhereUniqueInput';

@ArgsType()
export class UpdateOneMydbArgs {
  @Field((_type) => MydbUpdateInput, {
    nullable: false,
  })
  data!: MydbUpdateInput;

  @Field((_type) => MydbWhereUniqueInput, {
    nullable: false,
  })
  where!: MydbWhereUniqueInput;
}
