import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  constructor() {
    super();
  }
  getRequest(context: ExecutionContext) {
    // Seq 2.
    // https://stackoverflow.com/questions/70644923/nestjs-passport-typeerror-cannot-read-properties-of-undefined-reading-logi
    // transform the ExecutionContext from Graphql to one Nestjs/Passport can read
    // this.logger.debug(`context: ${context}`);
    const ctx = GqlExecutionContext.create(context);
    const getCtx = ctx.getContext().req;
    const { email, password } = ctx.getArgs();
    getCtx.body.email = email;
    getCtx.body.password = password;
    return getCtx;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const res = (await super.canActivate(context)) as boolean;
    return res;
  }
}
