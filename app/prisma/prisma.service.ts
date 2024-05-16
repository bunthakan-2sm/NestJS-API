import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(private readonly configService: ConfigService) {
    super({
      log: [
        {
          emit: 'event',
          level: 'query',
        },
      ],
    });
    // TODO
    // if(process.env.NODE_ENV){
    // }
  }

  async onModuleInit(): Promise<void> {
    process.env.DATABASE_URL = this.configService.get<string>(`DATABASE_URL`);
    await this.$connect();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // this.$on('query', async (e) => {
    //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //   // @ts-ignore
    //   // this.logger.debug(`${e.query} ${e.params}`);
    // });
  }

  async enableShutdownHooks(app: INestApplication): Promise<void> {
    console.log('exit');
    process.on('beforeExit', async () => {
      await app.close();
    });
  }
}
