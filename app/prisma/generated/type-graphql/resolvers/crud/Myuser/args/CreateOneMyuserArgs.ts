import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MyuserCreateInput } from "../../../inputs/MyuserCreateInput";

@ArgsType()
export class CreateOneMyuserArgs {
  @Field(_type => MyuserCreateInput, {
    nullable: false
  })
  data!: MyuserCreateInput;
}
