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
import { AggregateMydbArgs } from './args/AggregateMydbArgs';
import { Mydb } from '../../../models/Mydb';
import { AggregateMydb } from '../../outputs/AggregateMydb';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@Resolver((_of) => Mydb)
export class AggregateMydbResolver {
  @Query((_returns) => AggregateMydb, {
    nullable: false,
  })
  async aggregateMydb(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: AggregateMydbArgs,
  ): Promise<AggregateMydb> {
    return getPrismaFromContext(ctx).mydb.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
