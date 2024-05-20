import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneMyuserArgs } from "./args/UpsertOneMyuserArgs";
import { Myuser } from "../../../models/Myuser";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Myuser)
export class UpsertOneMyuserResolver {
  @Mutation(_returns => Myuser, {
    nullable: false
  })
  async upsertOneMyuser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpsertOneMyuserArgs): Promise<Myuser> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).myuser.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
