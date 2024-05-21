import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum MyuserScalarFieldEnum {
  id = "id",
  email = "email",
  password = "password",
  first_name = "first_name",
  last_name = "last_name",
  refresh_token = "refresh_token"
}
registerEnumType(MyuserScalarFieldEnum, {
  name: "MyuserScalarFieldEnum",
  description: undefined,
});
