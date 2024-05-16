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
import { UpdateManyMydbArgs } from './args/UpdateManyMydbArgs';
import { Mydb } from '../../../models/Mydb';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@Resolver((_of) => Mydb)
export class UpdateManyMydbResolver {
  @Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyMydb(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: UpdateManyMydbArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).mydb.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
