import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './strategies/local-auth.guard';
import { LoginResponse } from './auth.model';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Mutation(() => LoginResponse)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    {
      return await this.authService.getMe(email);
    }
  }

  // @UseGuards(GoogleOAuthGuard)
  // @Query(() => String)
  // async googleAuth(@Context() context: any) {
  //   const req = GqlExecutionContext.create(context).getContext().req;
  // }

  // @UseGuards(GoogleOAuthGuard)
  // @Mutation(() => String)
  // async googleRelogin(@Context() context: any) {
  //   const req = GqlExecutionContext.create(context).getContext().req;
  //   return this.authService.googleLogin(req);
  // }
}
