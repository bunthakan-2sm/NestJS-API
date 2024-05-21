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
import { MydbWhereInput } from '../../../inputs/MydbWhereInput';

@ArgsType()
export class DeleteManyMydbArgs {
  @Field((_type) => MydbWhereInput, {
    nullable: true,
  })
  where?: MydbWhereInput | undefined;
}
