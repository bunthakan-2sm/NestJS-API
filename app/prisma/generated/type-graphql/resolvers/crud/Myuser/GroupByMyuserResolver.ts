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
import { GroupByMyuserArgs } from './args/GroupByMyuserArgs';
import { Myuser } from '../../../models/Myuser';
import { MyuserGroupBy } from '../../outputs/MyuserGroupBy';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@Resolver((_of) => Myuser)
export class GroupByMyuserResolver {
  @Query((_returns) => [MyuserGroupBy], {
    nullable: false,
  })
  async groupByMyuser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: GroupByMyuserArgs,
  ): Promise<MyuserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).myuser.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
