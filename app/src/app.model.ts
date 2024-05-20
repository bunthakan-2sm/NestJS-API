import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class LoginResponse {
  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;
}