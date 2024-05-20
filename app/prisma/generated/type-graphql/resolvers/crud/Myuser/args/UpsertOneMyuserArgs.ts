import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MyuserCreateInput } from "../../../inputs/MyuserCreateInput";
import { MyuserUpdateInput } from "../../../inputs/MyuserUpdateInput";
import { MyuserWhereUniqueInput } from "../../../inputs/MyuserWhereUniqueInput";

@ArgsType()
export class UpsertOneMyuserArgs {
  @Field(_type => MyuserWhereUniqueInput, {
    nullable: false
  })
  where!: MyuserWhereUniqueInput;

  @Field(_type => MyuserCreateInput, {
    nullable: false
  })
  create!: MyuserCreateInput;

  @Field(_type => MyuserUpdateInput, {
    nullable: false
  })
  update!: MyuserUpdateInput;
}
