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
import { MyuserOrderByWithRelationInput } from '../../../inputs/MyuserOrderByWithRelationInput';
import { MyuserWhereInput } from '../../../inputs/MyuserWhereInput';
import { MyuserWhereUniqueInput } from '../../../inputs/MyuserWhereUniqueInput';

@ArgsType()
export class AggregateMyuserArgs {
  @Field((_type) => MyuserWhereInput, {
    nullable: true,
  })
  where?: MyuserWhereInput | undefined;

  @Field((_type) => [MyuserOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: MyuserOrderByWithRelationInput[] | undefined;

  @Field((_type) => MyuserWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MyuserWhereUniqueInput | undefined;

  @Field((_type) => Int, {
    nullable: true,
  })
  take?: number | undefined;

  @Field((_type) => Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
