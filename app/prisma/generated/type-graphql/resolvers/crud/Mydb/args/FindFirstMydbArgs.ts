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
import { MydbOrderByWithRelationInput } from '../../../inputs/MydbOrderByWithRelationInput';
import { MydbWhereInput } from '../../../inputs/MydbWhereInput';
import { MydbWhereUniqueInput } from '../../../inputs/MydbWhereUniqueInput';
import { MydbScalarFieldEnum } from '../../../../enums/MydbScalarFieldEnum';

@ArgsType()
export class FindFirstMydbArgs {
  @Field((_type) => MydbWhereInput, {
    nullable: true,
  })
  where?: MydbWhereInput | undefined;

  @Field((_type) => [MydbOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: MydbOrderByWithRelationInput[] | undefined;

  @Field((_type) => MydbWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MydbWhereUniqueInput | undefined;

  @Field((_type) => Int, {
    nullable: true,
  })
  take?: number | undefined;

  @Field((_type) => Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @Field((_type) => [MydbScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<'id' | 'firstname' | 'lastname'> | undefined;
}
