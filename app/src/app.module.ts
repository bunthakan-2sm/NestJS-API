import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from 'prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

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
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
