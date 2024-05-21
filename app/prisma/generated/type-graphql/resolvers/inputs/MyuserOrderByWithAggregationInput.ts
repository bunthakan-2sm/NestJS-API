import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MyuserCountOrderByAggregateInput } from "../inputs/MyuserCountOrderByAggregateInput";
import { MyuserMaxOrderByAggregateInput } from "../inputs/MyuserMaxOrderByAggregateInput";
import { MyuserMinOrderByAggregateInput } from "../inputs/MyuserMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("MyuserOrderByWithAggregationInput", {
  isAbstract: true
})
export class MyuserOrderByWithAggregationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  first_name?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  last_name?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  refresh_token?: "asc" | "desc" | undefined;

  @Field(_type => MyuserCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MyuserCountOrderByAggregateInput | undefined;

  @Field(_type => MyuserMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MyuserMaxOrderByAggregateInput | undefined;

  @Field(_type => MyuserMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MyuserMinOrderByAggregateInput | undefined;
}
