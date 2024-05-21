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
import { UpdateOneMyuserArgs } from './args/UpdateOneMyuserArgs';
import { Myuser } from '../../../models/Myuser';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@Resolver((_of) => Myuser)
export class UpdateOneMyuserResolver {
  @Mutation((_returns) => Myuser, {
    nullable: true,
  })
  async updateOneMyuser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: UpdateOneMyuserArgs,
  ): Promise<Myuser | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).myuser.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
