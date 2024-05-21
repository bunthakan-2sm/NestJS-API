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
import { FindFirstMyuserArgs } from './args/FindFirstMyuserArgs';
import { Myuser } from '../../../models/Myuser';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@Resolver((_of) => Myuser)
export class FindFirstMyuserResolver {
  @Query((_returns) => Myuser, {
    nullable: true,
  })
  async findFirstMyuser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: FindFirstMyuserArgs,
  ): Promise<Myuser | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).myuser.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
