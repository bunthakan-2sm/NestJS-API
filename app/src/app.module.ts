import { Module } from '@nestjs/common';
import { AuthorModule } from './author/author.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from 'prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { MyUserModule } from './my_user/my_user.module';
import { AuthModule } from './auth/auth.module';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { GoogleModule } from './auth/google/google.module';
import { GitHubModule } from './auth/github/github.module';
import { FBModule } from './auth/fb/fb.module';

const prisma = new PrismaService(new ConfigService());

@Module({
  imports: [
    AuthorModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
      context: ({ req, errorName }) => ({ req, prisma, errorName }),
    }),
    MyUserModule,
    AuthModule,
    GoogleModule,
    GitHubModule,
    FBModule,
  ],
  providers: [AppResolver, AppService],
})
export class AppModule {}
