import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyMyuserArgs } from "./args/FindManyMyuserArgs";
import { Myuser } from "../../../models/Myuser";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Myuser)
export class FindManyMyuserResolver {
  @Query(_returns => [Myuser], {
    nullable: false
  })
  async myusers(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyMyuserArgs): Promise<Myuser[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).myuser.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
