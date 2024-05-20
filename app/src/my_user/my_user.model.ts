import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @Field((_type) => String, {
    nullable: true,
  })
  email?: string | null;

  @Field((_type) => String, {
    nullable: true,
  })
  password?: string | null;

  @Field((_type) => String, {
    nullable: true,
  })
  first_name?: string | null;

  @Field((_type) => String, {
    nullable: true,
  })
  last_name?: string | null;
}
