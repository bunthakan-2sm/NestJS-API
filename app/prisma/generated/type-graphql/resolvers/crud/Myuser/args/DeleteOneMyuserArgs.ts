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
import { MyuserWhereUniqueInput } from '../../../inputs/MyuserWhereUniqueInput';

@ArgsType()
export class DeleteOneMyuserArgs {
  @Field((_type) => MyuserWhereUniqueInput, {
    nullable: false,
  })
  where!: MyuserWhereUniqueInput;
}
