import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MyuserCreateManyInput } from "../../../inputs/MyuserCreateManyInput";

@ArgsType()
export class CreateManyMyuserArgs {
  @Field(_type => [MyuserCreateManyInput], {
    nullable: false
  })
  data!: MyuserCreateManyInput[];

  @Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
