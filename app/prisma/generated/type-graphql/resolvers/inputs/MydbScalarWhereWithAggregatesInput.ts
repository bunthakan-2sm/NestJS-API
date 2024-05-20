import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("MydbScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class MydbScalarWhereWithAggregatesInput {
  @Field(_type => [MydbScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MydbScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [MydbScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MydbScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [MydbScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MydbScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  firstname?: StringNullableWithAggregatesFilter | undefined;

  @Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  lastname?: StringNullableWithAggregatesFilter | undefined;
}
