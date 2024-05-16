import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Author {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  firstname?: string;

  @Field({ nullable: true })
  lastname?: string;
}

@InputType()
export class AuthorInput {
  @Field({ nullable: false })
  firstname: string;

  @Field({ nullable: false })
  lastname: string;
}

@InputType()
export class AuthorInputPatch implements Partial<AuthorInput> {
  @Field({ nullable: true })
  firstname?: string;

  @Field({ nullable: true })
  lastname?: string;
}

@ObjectType()
export class DeleteAuthor {
  @Field(() => Int)
  status: number;

  @Field({ nullable: true })
  detail?: string;
}
