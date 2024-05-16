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
import { CreateOneMydbArgs } from './args/CreateOneMydbArgs';
import { Mydb } from '../../../models/Mydb';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@Resolver((_of) => Mydb)
export class CreateOneMydbResolver {
  @Mutation((_returns) => Mydb, {
    nullable: false,
  })
  async createOneMydb(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: CreateOneMydbArgs,
  ): Promise<Mydb> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).mydb.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
