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
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { NullableStringFieldUpdateOperationsInput } from '../inputs/NullableStringFieldUpdateOperationsInput';
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput';

@InputType('MyuserUpdateManyMutationInput', {
  isAbstract: true,
})
export class MyuserUpdateManyMutationInput {
  @Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  email?: NullableStringFieldUpdateOperationsInput | undefined;

  @Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  password?: NullableStringFieldUpdateOperationsInput | undefined;

  @Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  first_name?: NullableStringFieldUpdateOperationsInput | undefined;

  @Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  last_name?: NullableStringFieldUpdateOperationsInput | undefined;

  @Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  refresh_token?: NullableStringFieldUpdateOperationsInput | undefined;
}
