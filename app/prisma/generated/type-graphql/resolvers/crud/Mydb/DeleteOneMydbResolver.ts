import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneMydbArgs } from "./args/DeleteOneMydbArgs";
import { Mydb } from "../../../models/Mydb";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Mydb)
export class DeleteOneMydbResolver {
  @Mutation(_returns => Mydb, {
    nullable: true
  })
  async deleteOneMydb(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteOneMydbArgs): Promise<Mydb | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mydb.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
