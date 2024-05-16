import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueMydbArgs } from "./args/FindUniqueMydbArgs";
import { Mydb } from "../../../models/Mydb";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Mydb)
export class FindUniqueMydbResolver {
  @Query(_returns => Mydb, {
    nullable: true
  })
  async mydb(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueMydbArgs): Promise<Mydb | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mydb.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
