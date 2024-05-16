import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByMydbArgs } from "./args/GroupByMydbArgs";
import { Mydb } from "../../../models/Mydb";
import { MydbGroupBy } from "../../outputs/MydbGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Mydb)
export class GroupByMydbResolver {
  @Query(_returns => [MydbGroupBy], {
    nullable: false
  })
  async groupByMydb(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: GroupByMydbArgs): Promise<MydbGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mydb.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
