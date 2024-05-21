import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("MyuserScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class MyuserScalarWhereWithAggregatesInput {
  @Field(_type => [MyuserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MyuserScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [MyuserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MyuserScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [MyuserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MyuserScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  email?: StringNullableWithAggregatesFilter | undefined;

  @Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  password?: StringNullableWithAggregatesFilter | undefined;

  @Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  first_name?: StringNullableWithAggregatesFilter | undefined;

  @Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  last_name?: StringNullableWithAggregatesFilter | undefined;

  @Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  refresh_token?: StringNullableWithAggregatesFilter | undefined;
}
