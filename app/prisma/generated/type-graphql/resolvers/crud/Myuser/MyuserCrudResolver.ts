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
import { CreateManyMyuserArgs } from './args/CreateManyMyuserArgs';
import { CreateOneMyuserArgs } from './args/CreateOneMyuserArgs';
import { DeleteManyMyuserArgs } from './args/DeleteManyMyuserArgs';
import { DeleteOneMyuserArgs } from './args/DeleteOneMyuserArgs';
import { FindFirstMyuserArgs } from './args/FindFirstMyuserArgs';
import { FindManyMyuserArgs } from './args/FindManyMyuserArgs';
import { FindUniqueMyuserArgs } from './args/FindUniqueMyuserArgs';
import { GroupByMyuserArgs } from './args/GroupByMyuserArgs';
import { UpdateManyMyuserArgs } from './args/UpdateManyMyuserArgs';
import { UpdateOneMyuserArgs } from './args/UpdateOneMyuserArgs';
import { UpsertOneMyuserArgs } from './args/UpsertOneMyuserArgs';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';
import { Myuser } from '../../../models/Myuser';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import { AggregateMyuser } from '../../outputs/AggregateMyuser';
import { MyuserGroupBy } from '../../outputs/MyuserGroupBy';

@Resolver((_of) => Myuser)
export class MyuserCrudResolver {
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

  @Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyMyuser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: CreateManyMyuserArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).myuser.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation((_returns) => Myuser, {
    nullable: false,
  })
  async createOneMyuser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: CreateOneMyuserArgs,
  ): Promise<Myuser> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).myuser.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyMyuser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: DeleteManyMyuserArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).myuser.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation((_returns) => Myuser, {
    nullable: true,
  })
  async deleteOneMyuser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: DeleteOneMyuserArgs,
  ): Promise<Myuser | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).myuser.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @Query((_returns) => [Myuser], {
    nullable: false,
  })
  async myusers(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: FindManyMyuserArgs,
  ): Promise<Myuser[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).myuser.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query((_returns) => Myuser, {
    nullable: true,
  })
  async myuser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: FindUniqueMyuserArgs,
  ): Promise<Myuser | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).myuser.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyMyuser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: UpdateManyMyuserArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).myuser.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @Mutation((_returns) => Myuser, {
    nullable: false,
  })
  async upsertOneMyuser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: UpsertOneMyuserArgs,
  ): Promise<Myuser> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).myuser.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
