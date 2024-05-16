import {
  Args,
  ArgsType,
  Context,
  Field,
  Float,
  ID,
  Info,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  ResolveField,
  Resolver,
  Root,
  registerEnumType,
} from '@nestjs/graphql';
import * as graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import { UpdateOneMydbArgs } from './args/UpdateOneMydbArgs';
import { Mydb } from '../../../models/Mydb';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@Resolver((_of) => Mydb)
export class UpdateOneMydbResolver {
  @Mutation((_returns) => Mydb, {
    nullable: true,
  })
  async updateOneMydb(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: UpdateOneMydbArgs,
  ): Promise<Mydb | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).mydb.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
