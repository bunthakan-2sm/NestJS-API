import {
  Args,
  Context,
  Info,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import * as graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';
import {
  AggregateMydbArgs,
  CreateManyMydbArgs,
  CreateOneMydbArgs,
  DeleteManyMydbArgs,
  DeleteOneMydbArgs,
  FindFirstMydbArgs,
  FindManyMydbArgs,
  FindUniqueMydbArgs,
  GroupByMydbArgs,
  UpdateManyMydbArgs,
  UpdateOneMydbArgs,
  UpsertOneMydbArgs,
  AffectedRowsOutput,
  AggregateMydb,
  MydbGroupBy,
  Mydb,
} from '../../prisma/generated/type-graphql/';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../prisma/generated/type-graphql/helpers';

@Resolver(() => Mydb)
export class MydbCrudResolver {
  @Query(() => AggregateMydb, {
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

  @Mutation(() => AffectedRowsOutput, {
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

  @Mutation(() => Mydb, {
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

  @Mutation(() => AffectedRowsOutput, {
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

  @Mutation(() => Mydb, {
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

  @Query(() => Mydb, {
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

  @Query(() => [Mydb], {
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

  @Query(() => Mydb, {
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

  @Query(() => [MydbGroupBy], {
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
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          ([_, v]) => v != null,
        ),
      ),
    });
  }

  @Mutation(() => AffectedRowsOutput, {
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

  @Mutation(() => Mydb, {
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

  @Mutation(() => Mydb, {
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
