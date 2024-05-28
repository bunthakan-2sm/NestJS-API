import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GoogleOAuthGuard extends AuthGuard('google') {
  constructor(private configService: ConfigService) {
    super({
      accessType: 'offline',
    });
  }

  // getRequest(context: ExecutionContext) {
  //   // Seq 2.
  //   // https://stackoverflow.com/questions/70644923/nestjs-passport-typeerror-cannot-read-properties-of-undefined-reading-logi
  //   // transform the ExecutionContext from Graphql to one Nestjs/Passport can read
  //   // this.logger.debug(`context: ${context}`);
  //   const ctx = GqlExecutionContext.create(context);
  //   return ctx.getContext().req;
  // }

  // async canActivate(context: ExecutionContext): Promise<boolean> {
  //   const res = (await super.canActivate(context)) as boolean;
  //   return res;
  // }
}
