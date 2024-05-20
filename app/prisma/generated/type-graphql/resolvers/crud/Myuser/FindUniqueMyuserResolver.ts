import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueMyuserArgs } from "./args/FindUniqueMyuserArgs";
import { Myuser } from "../../../models/Myuser";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Myuser)
export class FindUniqueMyuserResolver {
  @Query(_returns => Myuser, {
    nullable: true
  })
  async myuser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueMyuserArgs): Promise<Myuser | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).myuser.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
