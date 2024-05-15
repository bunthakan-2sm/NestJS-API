import { Module } from '@nestjs/common';
import { AuthorResolver } from './author.resolver';

@Module({
  imports: [AuthorResolver],
  providers: [],
})
export class AuthorModule {}
