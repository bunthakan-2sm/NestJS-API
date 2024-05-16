import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MydbCountOrderByAggregateInput } from "../inputs/MydbCountOrderByAggregateInput";
import { MydbMaxOrderByAggregateInput } from "../inputs/MydbMaxOrderByAggregateInput";
import { MydbMinOrderByAggregateInput } from "../inputs/MydbMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("MydbOrderByWithAggregationInput", {
  isAbstract: true
})
export class MydbOrderByWithAggregationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  firstname?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  lastname?: "asc" | "desc" | undefined;

  @Field(_type => MydbCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MydbCountOrderByAggregateInput | undefined;

  @Field(_type => MydbMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MydbMaxOrderByAggregateInput | undefined;

  @Field(_type => MydbMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MydbMinOrderByAggregateInput | undefined;
}
