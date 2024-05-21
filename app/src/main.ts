import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const corsOptions = {
    origin: ['*'],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };

  const app = await NestFactory.create(AppModule, { cors: corsOptions });
  app.enableCors();
  await app.listen(8080);
}
bootstrap();
