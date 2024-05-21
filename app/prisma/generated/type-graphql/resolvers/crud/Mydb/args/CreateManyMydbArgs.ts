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
import { MydbCreateManyInput } from '../../../inputs/MydbCreateManyInput';

@ArgsType()
export class CreateManyMydbArgs {
  @Field((_type) => [MydbCreateManyInput], {
    nullable: false,
  })
  data!: MydbCreateManyInput[];

  @Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
