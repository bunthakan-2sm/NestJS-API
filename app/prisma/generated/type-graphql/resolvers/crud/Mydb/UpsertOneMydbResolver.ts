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
import { UpsertOneMydbArgs } from './args/UpsertOneMydbArgs';
import { Mydb } from '../../../models/Mydb';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@Resolver((_of) => Mydb)
export class UpsertOneMydbResolver {
  @Mutation((_returns) => Mydb, {
    nullable: false,
  })
  async upsertOneMydb(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: UpsertOneMydbArgs,
  ): Promise<Mydb> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).mydb.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
