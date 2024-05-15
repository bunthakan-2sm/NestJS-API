import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Author, AuthorInput } from './author.model';
import { authorData } from './data';

@Resolver((of) => Author)
export class AuthorResolver {
  @Query((returns) => [Author])
  getAuthors() {
    return authorData;
  }

  @Mutation((returns) => [Author])
  addAuthor(@Args('authorPayload') authorPayload: AuthorInput) {
    const newAuthorData = {
      id: authorData.length + 1,
      ...authorPayload,
    };
    authorData.push(newAuthorData);
    return authorData;
  }

  @Query((returns) => Author)
  getAuthorById(@Args('id') id: number) {
    return authorData.find((author) => author.id === id);
  }
}
