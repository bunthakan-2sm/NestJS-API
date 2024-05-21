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

@InputType('MydbUpdateManyMutationInput', {
  isAbstract: true,
})
export class MydbUpdateManyMutationInput {
  @Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  firstname?: NullableStringFieldUpdateOperationsInput | undefined;

  @Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  lastname?: NullableStringFieldUpdateOperationsInput | undefined;
}
