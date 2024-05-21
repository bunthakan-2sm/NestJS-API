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

@ArgsType()
export class CreateOneMydbArgs {
  @Field((_type) => MydbCreateInput, {
    nullable: false,
  })
  data!: MydbCreateInput;
}
