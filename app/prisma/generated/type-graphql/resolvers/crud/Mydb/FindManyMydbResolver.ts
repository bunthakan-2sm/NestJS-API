import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyMydbArgs } from "./args/FindManyMydbArgs";
import { Mydb } from "../../../models/Mydb";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Mydb)
export class FindManyMydbResolver {
  @Query(_returns => [Mydb], {
    nullable: false
  })
  async mydbs(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyMydbArgs): Promise<Mydb[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mydb.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
