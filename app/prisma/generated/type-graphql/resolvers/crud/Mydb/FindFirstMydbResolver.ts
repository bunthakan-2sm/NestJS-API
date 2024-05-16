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
import { FindFirstMydbArgs } from './args/FindFirstMydbArgs';
import { Mydb } from '../../../models/Mydb';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@Resolver((_of) => Mydb)
export class FindFirstMydbResolver {
  @Query((_returns) => Mydb, {
    nullable: true,
  })
  async findFirstMydb(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: FindFirstMydbArgs,
  ): Promise<Mydb | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).mydb.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
