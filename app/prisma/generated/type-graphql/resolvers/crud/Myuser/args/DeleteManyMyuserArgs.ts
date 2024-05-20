import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MyuserWhereInput } from "../../../inputs/MyuserWhereInput";

@ArgsType()
export class DeleteManyMyuserArgs {
  @Field(_type => MyuserWhereInput, {
    nullable: true
  })
  where?: MyuserWhereInput | undefined;
}
