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
import { MyuserOrderByWithAggregationInput } from '../../../inputs/MyuserOrderByWithAggregationInput';
import { MyuserScalarWhereWithAggregatesInput } from '../../../inputs/MyuserScalarWhereWithAggregatesInput';
import { MyuserWhereInput } from '../../../inputs/MyuserWhereInput';
import { MyuserScalarFieldEnum } from '../../../../enums/MyuserScalarFieldEnum';

@ArgsType()
export class GroupByMyuserArgs {
  @Field((_type) => MyuserWhereInput, {
    nullable: true,
  })
  where?: MyuserWhereInput | undefined;

  @Field((_type) => [MyuserOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: MyuserOrderByWithAggregationInput[] | undefined;

  @Field((_type) => [MyuserScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    'id' | 'email' | 'password' | 'first_name' | 'last_name' | 'refresh_token'
  >;

  @Field((_type) => MyuserScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: MyuserScalarWhereWithAggregatesInput | undefined;

  @Field((_type) => Int, {
    nullable: true,
  })
  take?: number | undefined;

  @Field((_type) => Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
