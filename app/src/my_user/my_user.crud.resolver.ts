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
  AggregateMyuserArgs,
  CreateManyMyuserArgs,
  CreateOneMyuserArgs,
  DeleteManyMyuserArgs,
  DeleteOneMyuserArgs,
  FindFirstMyuserArgs,
  FindManyMyuserArgs,
  FindUniqueMyuserArgs,
  GroupByMyuserArgs,
  UpdateManyMyuserArgs,
  UpdateOneMyuserArgs,
  UpsertOneMyuserArgs,
  Myuser,
  AffectedRowsOutput,
  AggregateMyuser,
  MyuserGroupBy,
} from '../../prisma/generated/type-graphql';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../prisma/generated/type-graphql/helpers';
import { v4 as uuidv4 } from 'uuid';

@Resolver(() => Myuser)
export class MyuserCrudResolver {
  @Query(() => AggregateMyuser, {
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

  @Mutation(() => AffectedRowsOutput, {
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

  @Mutation(() => Myuser, {
    nullable: false,
  })
  async createOneMyuser(
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: CreateOneMyuserArgs,
  ): Promise<Myuser> {
    const { _count } = transformFields(graphqlFields(info as any));
    const payload = {
      data: {
        ...args.data,
        id: uuidv4(),
      },
    };
    return getPrismaFromContext(ctx).myuser.create({
      ...payload,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(() => AffectedRowsOutput, {
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

  @Mutation(() => Myuser, {
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

  @Query(() => Myuser, {
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

  @Query(() => [Myuser], {
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

  @Query(() => Myuser, {
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

  @Query(() => [MyuserGroupBy], {
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
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          ([_, v]) => v != null,
        ),
      ),
    });
  }

  @Mutation(() => AffectedRowsOutput, {
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

  @Mutation(() => Myuser, {
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

  @Mutation(() => Myuser, {
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
