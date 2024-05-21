import { ClassType } from 'type-graphql';
import * as tslib from 'tslib';
import * as crudResolvers from './resolvers/crud/resolvers-crud.index';
import * as argsTypes from './resolvers/crud/args.index';
import * as actionResolvers from './resolvers/crud/resolvers-actions.index';
import * as models from './models';
import * as outputTypes from './resolvers/outputs';
import * as inputTypes from './resolvers/inputs';

const crudResolversMap = {
  Mydb: crudResolvers.MydbCrudResolver,
  Myuser: crudResolvers.MyuserCrudResolver,
};
const actionResolversMap = {
  Mydb: {
    aggregateMydb: actionResolvers.AggregateMydbResolver,
    createManyMydb: actionResolvers.CreateManyMydbResolver,
    createOneMydb: actionResolvers.CreateOneMydbResolver,
    deleteManyMydb: actionResolvers.DeleteManyMydbResolver,
    deleteOneMydb: actionResolvers.DeleteOneMydbResolver,
    findFirstMydb: actionResolvers.FindFirstMydbResolver,
    mydbs: actionResolvers.FindManyMydbResolver,
    mydb: actionResolvers.FindUniqueMydbResolver,
    groupByMydb: actionResolvers.GroupByMydbResolver,
    updateManyMydb: actionResolvers.UpdateManyMydbResolver,
    updateOneMydb: actionResolvers.UpdateOneMydbResolver,
    upsertOneMydb: actionResolvers.UpsertOneMydbResolver,
  },
  Myuser: {
    aggregateMyuser: actionResolvers.AggregateMyuserResolver,
    createManyMyuser: actionResolvers.CreateManyMyuserResolver,
    createOneMyuser: actionResolvers.CreateOneMyuserResolver,
    deleteManyMyuser: actionResolvers.DeleteManyMyuserResolver,
    deleteOneMyuser: actionResolvers.DeleteOneMyuserResolver,
    findFirstMyuser: actionResolvers.FindFirstMyuserResolver,
    myusers: actionResolvers.FindManyMyuserResolver,
    myuser: actionResolvers.FindUniqueMyuserResolver,
    groupByMyuser: actionResolvers.GroupByMyuserResolver,
    updateManyMyuser: actionResolvers.UpdateManyMyuserResolver,
    updateOneMyuser: actionResolvers.UpdateOneMyuserResolver,
    upsertOneMyuser: actionResolvers.UpsertOneMyuserResolver,
  },
};
const crudResolversInfo = {
  Mydb: [
    'aggregateMydb',
    'createManyMydb',
    'createOneMydb',
    'deleteManyMydb',
    'deleteOneMydb',
    'findFirstMydb',
    'mydbs',
    'mydb',
    'groupByMydb',
    'updateManyMydb',
    'updateOneMydb',
    'upsertOneMydb',
  ],
  Myuser: [
    'aggregateMyuser',
    'createManyMyuser',
    'createOneMyuser',
    'deleteManyMyuser',
    'deleteOneMyuser',
    'findFirstMyuser',
    'myusers',
    'myuser',
    'groupByMyuser',
    'updateManyMyuser',
    'updateOneMyuser',
    'upsertOneMyuser',
  ],
};
const argsInfo = {
  AggregateMydbArgs: ['where', 'orderBy', 'cursor', 'take', 'skip'],
  CreateManyMydbArgs: ['data', 'skipDuplicates'],
  CreateOneMydbArgs: ['data'],
  DeleteManyMydbArgs: ['where'],
  DeleteOneMydbArgs: ['where'],
  FindFirstMydbArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindManyMydbArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindUniqueMydbArgs: ['where'],
  GroupByMydbArgs: ['where', 'orderBy', 'by', 'having', 'take', 'skip'],
  UpdateManyMydbArgs: ['data', 'where'],
  UpdateOneMydbArgs: ['data', 'where'],
  UpsertOneMydbArgs: ['where', 'create', 'update'],
  AggregateMyuserArgs: ['where', 'orderBy', 'cursor', 'take', 'skip'],
  CreateManyMyuserArgs: ['data', 'skipDuplicates'],
  CreateOneMyuserArgs: ['data'],
  DeleteManyMyuserArgs: ['where'],
  DeleteOneMyuserArgs: ['where'],
  FindFirstMyuserArgs: [
    'where',
    'orderBy',
    'cursor',
    'take',
    'skip',
    'distinct',
  ],
  FindManyMyuserArgs: [
    'where',
    'orderBy',
    'cursor',
    'take',
    'skip',
    'distinct',
  ],
  FindUniqueMyuserArgs: ['where'],
  GroupByMyuserArgs: ['where', 'orderBy', 'by', 'having', 'take', 'skip'],
  UpdateManyMyuserArgs: ['data', 'where'],
  UpdateOneMyuserArgs: ['data', 'where'],
  UpsertOneMyuserArgs: ['where', 'create', 'update'],
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<TModel extends ResolverModelNames> =
  keyof (typeof crudResolversMap)[TModel]['prototype'];

export type ResolverActionsConfig<TModel extends ResolverModelNames> = Partial<
  Record<ModelResolverActionNames<TModel> | '_all', MethodDecorator[]>
>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName =
      resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames =
        crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (
          actionResolversConfig[
            resolverActionName as keyof typeof actionResolversConfig
          ] as Function
        ).prototype;
        tslib.__decorate(
          allActionsDecorators,
          crudTarget,
          resolverActionName,
          null,
        );
        tslib.__decorate(
          allActionsDecorators,
          actionTarget,
          resolverActionName,
          null,
        );
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      (it) => it !== '_all',
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (
        actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function
      ).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof (typeof argsTypes)[TArgsType]['prototype'],
  number | symbol
>;

type ArgFieldsConfig<TArgsType extends ArgsTypesNames> = FieldsConfig<
  ArgFieldNames<TArgsType>
>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName =
      argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | '_all', PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object,
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[],
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(
          allFieldsDecorators,
          typePrototype,
          typeFieldName,
          void 0,
        );
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      (it) => it !== '_all',
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Mydb: ['id', 'firstname', 'lastname'],
  Myuser: [
    'id',
    'email',
    'password',
    'first_name',
    'last_name',
    'refresh_token',
  ],
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof (typeof models)[TModel]['prototype'],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateMydb: ['_count', '_min', '_max'],
  MydbGroupBy: ['id', 'firstname', 'lastname', '_count', '_min', '_max'],
  AggregateMyuser: ['_count', '_min', '_max'],
  MyuserGroupBy: [
    'id',
    'email',
    'password',
    'first_name',
    'last_name',
    'refresh_token',
    '_count',
    '_min',
    '_max',
  ],
  AffectedRowsOutput: ['count'],
  MydbCountAggregate: ['id', 'firstname', 'lastname', '_all'],
  MydbMinAggregate: ['id', 'firstname', 'lastname'],
  MydbMaxAggregate: ['id', 'firstname', 'lastname'],
  MyuserCountAggregate: [
    'id',
    'email',
    'password',
    'first_name',
    'last_name',
    'refresh_token',
    '_all',
  ],
  MyuserMinAggregate: [
    'id',
    'email',
    'password',
    'first_name',
    'last_name',
    'refresh_token',
  ],
  MyuserMaxAggregate: [
    'id',
    'email',
    'password',
    'first_name',
    'last_name',
    'refresh_token',
  ],
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof (typeof outputTypes)[TOutput]['prototype'],
  number | symbol
>;

type OutputTypeFieldsConfig<TOutput extends OutputTypesNames> = FieldsConfig<
  OutputTypeFieldNames<TOutput>
>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName =
      outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  MydbWhereInput: ['AND', 'OR', 'NOT', 'id', 'firstname', 'lastname'],
  MydbOrderByWithRelationInput: ['id', 'firstname', 'lastname'],
  MydbWhereUniqueInput: ['id'],
  MydbOrderByWithAggregationInput: [
    'id',
    'firstname',
    'lastname',
    '_count',
    '_max',
    '_min',
  ],
  MydbScalarWhereWithAggregatesInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'firstname',
    'lastname',
  ],
  MyuserWhereInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'email',
    'password',
    'first_name',
    'last_name',
    'refresh_token',
  ],
  MyuserOrderByWithRelationInput: [
    'id',
    'email',
    'password',
    'first_name',
    'last_name',
    'refresh_token',
  ],
  MyuserWhereUniqueInput: ['id'],
  MyuserOrderByWithAggregationInput: [
    'id',
    'email',
    'password',
    'first_name',
    'last_name',
    'refresh_token',
    '_count',
    '_max',
    '_min',
  ],
  MyuserScalarWhereWithAggregatesInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'email',
    'password',
    'first_name',
    'last_name',
    'refresh_token',
  ],
  MydbCreateInput: ['id', 'firstname', 'lastname'],
  MydbUpdateInput: ['id', 'firstname', 'lastname'],
  MydbCreateManyInput: ['id', 'firstname', 'lastname'],
  MydbUpdateManyMutationInput: ['id', 'firstname', 'lastname'],
  MyuserCreateInput: [
    'id',
    'email',
    'password',
    'first_name',
    'last_name',
    'refresh_token',
  ],
  MyuserUpdateInput: [
    'id',
    'email',
    'password',
    'first_name',
    'last_name',
    'refresh_token',
  ],
  MyuserCreateManyInput: [
    'id',
    'email',
    'password',
    'first_name',
    'last_name',
    'refresh_token',
  ],
  MyuserUpdateManyMutationInput: [
    'id',
    'email',
    'password',
    'first_name',
    'last_name',
    'refresh_token',
  ],
  StringFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
  ],
  StringNullableFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
  ],
  MydbCountOrderByAggregateInput: ['id', 'firstname', 'lastname'],
  MydbMaxOrderByAggregateInput: ['id', 'firstname', 'lastname'],
  MydbMinOrderByAggregateInput: ['id', 'firstname', 'lastname'],
  StringWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  StringNullableWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  MyuserCountOrderByAggregateInput: [
    'id',
    'email',
    'password',
    'first_name',
    'last_name',
    'refresh_token',
  ],
  MyuserMaxOrderByAggregateInput: [
    'id',
    'email',
    'password',
    'first_name',
    'last_name',
    'refresh_token',
  ],
  MyuserMinOrderByAggregateInput: [
    'id',
    'email',
    'password',
    'first_name',
    'last_name',
    'refresh_token',
  ],
  StringFieldUpdateOperationsInput: ['set'],
  NullableStringFieldUpdateOperationsInput: ['set'],
  NestedStringFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
  ],
  NestedStringNullableFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
  ],
  NestedStringWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  NestedIntFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  NestedStringNullableWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  NestedIntNullableFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
  ],
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof (typeof inputTypes)[TInput]['prototype'],
  number | symbol
>;

type InputTypeFieldsConfig<TInput extends InputTypesNames> = FieldsConfig<
  InputTypeFieldNames<TInput>
>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName =
      inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}
