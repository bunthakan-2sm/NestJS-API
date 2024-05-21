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
import { MyuserUpdateInput } from '../../../inputs/MyuserUpdateInput';
import { MyuserWhereUniqueInput } from '../../../inputs/MyuserWhereUniqueInput';

@ArgsType()
export class UpdateOneMyuserArgs {
  @Field((_type) => MyuserUpdateInput, {
    nullable: false,
  })
  data!: MyuserUpdateInput;

  @Field((_type) => MyuserWhereUniqueInput, {
    nullable: false,
  })
  where!: MyuserWhereUniqueInput;
}
