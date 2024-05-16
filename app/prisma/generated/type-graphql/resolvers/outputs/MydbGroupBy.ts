import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MydbCountAggregate } from "../outputs/MydbCountAggregate";
import { MydbMaxAggregate } from "../outputs/MydbMaxAggregate";
import { MydbMinAggregate } from "../outputs/MydbMinAggregate";

@ObjectType("MydbGroupBy", {
  isAbstract: true
})
export class MydbGroupBy {
  @Field(_type => String, {
    nullable: false
  })
  id!: string;

  @Field(_type => String, {
    nullable: true
  })
  firstname!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  lastname!: string | null;

  @Field(_type => MydbCountAggregate, {
    nullable: true
  })
  _count!: MydbCountAggregate | null;

  @Field(_type => MydbMinAggregate, {
    nullable: true
  })
  _min!: MydbMinAggregate | null;

  @Field(_type => MydbMaxAggregate, {
    nullable: true
  })
  _max!: MydbMaxAggregate | null;
}
