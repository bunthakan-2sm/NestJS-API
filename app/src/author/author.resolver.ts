import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  Author,
  AuthorInput,
  AuthorInputPatch,
  DeleteAuthor,
} from './author.model';
import { AuthorService } from './author.services';
import { Mydb } from 'prisma/generated/type-graphql';
@Resolver(() => Author)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}
  @Query(() => [Mydb])
  async getAuthors() {
    console.log('getAuthors');
    return await this.authorService.getAllAuthors();
  }

  @Mutation(() => Mydb)
  async addAuthor(@Args('authorPayload') authorPayload: AuthorInput) {
    return await this.authorService.postAuthor(authorPayload);
  }

  @Mutation(() => Author)
  patchAuthor(
    @Args('authorPayload') authorPayload: AuthorInputPatch,
    @Args('id') id: string,
  ) {
    return this.authorService.patchAuthor(authorPayload, id);
  }

  @Mutation(() => DeleteAuthor)
  async deleteAuthor(@Args('id') id: string) {
    return await this.authorService.DeleteAuthor(id);
  }
}
