import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MydbOrderByWithAggregationInput } from "../../../inputs/MydbOrderByWithAggregationInput";
import { MydbScalarWhereWithAggregatesInput } from "../../../inputs/MydbScalarWhereWithAggregatesInput";
import { MydbWhereInput } from "../../../inputs/MydbWhereInput";
import { MydbScalarFieldEnum } from "../../../../enums/MydbScalarFieldEnum";

@ArgsType()
export class GroupByMydbArgs {
  @Field(_type => MydbWhereInput, {
    nullable: true
  })
  where?: MydbWhereInput | undefined;

  @Field(_type => [MydbOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MydbOrderByWithAggregationInput[] | undefined;

  @Field(_type => [MydbScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "firstname" | "lastname">;

  @Field(_type => MydbScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MydbScalarWhereWithAggregatesInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
