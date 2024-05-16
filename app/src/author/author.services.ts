import { Injectable } from '@nestjs/common';
import { Mydb } from 'prisma/generated/type-graphql';
import { PrismaService } from 'prisma/prisma.service';
import { AuthorInput, AuthorInputPatch, DeleteAuthor } from './author.model';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}
  async getAllAuthors(): Promise<Mydb[]> {
    const authors = await this.prisma.mydb.findMany();
    return authors;
  }

  async postAuthor({ firstname, lastname }: AuthorInput): Promise<Mydb> {
    const author = await this.prisma.mydb.create({
      data: {
        id: String((await this.prisma.mydb.count()) + 1),
        firstname: firstname,
        lastname: lastname,
      },
    });
    return author;
  }

  async patchAuthor(payload: AuthorInputPatch, id: string): Promise<Mydb> {
    const authorUpdate = await this.prisma.mydb.update({
      where: {
        id: id,
      },
      data: {
        ...payload,
      },
    });
    return authorUpdate;
  }

  async DeleteAuthor(id: string): Promise<DeleteAuthor> {
    const authorDelete = await this.prisma.mydb.delete({
      where: {
        id: id,
      },
    });
    if (authorDelete) {
      return {
        status: 200,
        detail: 'Author deleted successfully',
      };
    } else {
      return {
        status: 400,
        detail: 'Author not found',
      };
    }
  }
}
