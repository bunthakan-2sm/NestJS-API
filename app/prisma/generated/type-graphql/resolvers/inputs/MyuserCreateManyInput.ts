import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@InputType("MyuserCreateManyInput", {
  isAbstract: true
})
export class MyuserCreateManyInput {
  @Field(_type => String, {
    nullable: false
  })
  id!: string;

  @Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  first_name?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  last_name?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  refresh_token?: string | undefined;
}
