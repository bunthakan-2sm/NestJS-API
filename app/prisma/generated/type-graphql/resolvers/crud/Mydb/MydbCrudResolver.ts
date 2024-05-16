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
import { CreateManyMydbArgs } from './args/CreateManyMydbArgs';
import { CreateOneMydbArgs } from './args/CreateOneMydbArgs';
import { DeleteManyMydbArgs } from './args/DeleteManyMydbArgs';
import { DeleteOneMydbArgs } from './args/DeleteOneMydbArgs';
import { FindFirstMydbArgs } from './args/FindFirstMydbArgs';
import { FindManyMydbArgs } from './args/FindManyMydbArgs';
import { FindUniqueMydbArgs } from './args/FindUniqueMydbArgs';
import { GroupByMydbArgs } from './args/GroupByMydbArgs';
import { UpdateManyMydbArgs } from './args/UpdateManyMydbArgs';
import { UpdateOneMydbArgs } from './args/UpdateOneMydbArgs';
import { UpsertOneMydbArgs } from './args/UpsertOneMydbArgs';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';
import { Mydb } from '../../../models/Mydb';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import { AggregateMydb } from '../../outputs/AggregateMydb';
import { MydbGroupBy } from '../../outputs/MydbGroupBy';

@Resolver((_of) => Mydb)
export class MydbCrudResolver {
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

  @Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyMydb(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: CreateManyMydbArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).mydb.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyMydb(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: DeleteManyMydbArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).mydb.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation((_returns) => Mydb, {
    nullable: true,
  })
  async deleteOneMydb(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: DeleteOneMydbArgs,
  ): Promise<Mydb | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).mydb.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @Query((_returns) => [Mydb], {
    nullable: false,
  })
  async mydbs(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: FindManyMydbArgs,
  ): Promise<Mydb[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).mydb.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query((_returns) => Mydb, {
    nullable: true,
  })
  async mydb(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: FindUniqueMydbArgs,
  ): Promise<Mydb | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).mydb.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query((_returns) => [MydbGroupBy], {
    nullable: false,
  })
  async groupByMydb(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: GroupByMydbArgs,
  ): Promise<MydbGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).mydb.groupBy({
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

  @Mutation((_returns) => Mydb, {
    nullable: true,
  })
  async updateOneMydb(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: UpdateOneMydbArgs,
  ): Promise<Mydb | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).mydb.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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
