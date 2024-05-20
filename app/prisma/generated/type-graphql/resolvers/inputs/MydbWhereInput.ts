import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@InputType("MydbWhereInput", {
  isAbstract: true
})
export class MydbWhereInput {
  @Field(_type => [MydbWhereInput], {
    nullable: true
  })
  AND?: MydbWhereInput[] | undefined;

  @Field(_type => [MydbWhereInput], {
    nullable: true
  })
  OR?: MydbWhereInput[] | undefined;

  @Field(_type => [MydbWhereInput], {
    nullable: true
  })
  NOT?: MydbWhereInput[] | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @Field(_type => StringNullableFilter, {
    nullable: true
  })
  firstname?: StringNullableFilter | undefined;

  @Field(_type => StringNullableFilter, {
    nullable: true
  })
  lastname?: StringNullableFilter | undefined;
}
