import { Module } from '@nestjs/common';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.services';
import { PrismaModule } from 'prisma/prisma.module';
import { MydbCrudResolver } from './author.crud.resolver';

@Module({
  imports: [PrismaModule],
  providers: [AuthorService, AuthorResolver, MydbCrudResolver],
  exports: [AuthorService],
})
export class AuthorModule {}
