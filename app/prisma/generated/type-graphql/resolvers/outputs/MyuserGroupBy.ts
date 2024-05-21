import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MyuserCountAggregate } from "../outputs/MyuserCountAggregate";
import { MyuserMaxAggregate } from "../outputs/MyuserMaxAggregate";
import { MyuserMinAggregate } from "../outputs/MyuserMinAggregate";

@ObjectType("MyuserGroupBy", {
  isAbstract: true
})
export class MyuserGroupBy {
  @Field(_type => String, {
    nullable: false
  })
  id!: string;

  @Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  password!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  first_name!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  last_name!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  refresh_token!: string | null;

  @Field(_type => MyuserCountAggregate, {
    nullable: true
  })
  _count!: MyuserCountAggregate | null;

  @Field(_type => MyuserMinAggregate, {
    nullable: true
  })
  _min!: MyuserMinAggregate | null;

  @Field(_type => MyuserMaxAggregate, {
    nullable: true
  })
  _max!: MyuserMaxAggregate | null;
}
