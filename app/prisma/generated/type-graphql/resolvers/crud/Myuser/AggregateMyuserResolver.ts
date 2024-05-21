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
import { AggregateMyuserArgs } from './args/AggregateMyuserArgs';
import { Myuser } from '../../../models/Myuser';
import { AggregateMyuser } from '../../outputs/AggregateMyuser';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@Resolver((_of) => Myuser)
export class AggregateMyuserResolver {
  @Query((_returns) => AggregateMyuser, {
    nullable: false,
  })
  async aggregateMyuser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: AggregateMyuserArgs,
  ): Promise<AggregateMyuser> {
    return getPrismaFromContext(ctx).myuser.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
