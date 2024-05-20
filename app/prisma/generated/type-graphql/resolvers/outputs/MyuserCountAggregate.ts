import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("MyuserCountAggregate", {
  isAbstract: true
})
export class MyuserCountAggregate {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => Int, {
    nullable: false
  })
  email!: number;

  @Field(_type => Int, {
    nullable: false
  })
  password!: number;

  @Field(_type => Int, {
    nullable: false
  })
  first_name!: number;

  @Field(_type => Int, {
    nullable: false
  })
  last_name!: number;

  @Field(_type => Int, {
    nullable: false
  })
  _all!: number;
}
