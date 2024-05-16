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

export enum MydbScalarFieldEnum {
  id = 'id',
  firstname = 'firstname',
  lastname = 'lastname',
}
registerEnumType(MydbScalarFieldEnum, {
  name: 'MydbScalarFieldEnum',
  description: undefined,
});
