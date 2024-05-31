import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github';

@Injectable()
export class GitHubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor() {
    super({
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET_ID,
      callbackURL: 'http://localhost:8080/github-auth/callback',
      scope: ['user', 'read:user', 'public_repo'],
      passReqToCallback: true,
    });
  }
  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any,
  ) {
    // For each strategy, Passport will call the verify function (implemented with this
    // `validate()` method in @nestjs/passport) using an appropriate strategy-specific set of
    // parameters. For the passport-github strategy Passport expects a `validate()` method with
    // the following signature:
    //   `validate(accessToken: string, refreshToken: string, profile: Profile): any`
    // As you can see from this, `validate()` receives the access token and optional refresh
    // token, as well as profile which contains the authenticated user's GitHub profile.
    // We can pass these information to find or create the user in our system.
    // The Passport library expects this method to return a full user if the validation
    // succeeds, or a null if it fails. When returning a user, Passport will complete its tasks
    // (e.g., creating the user property on the Request object), and the request
    // handling pipeline can continue.

    const user = {
      id: profile.id,
      name: profile.displayName ? profile.displayName : profile.username,
      email: profile.emails ? profile.emails[0].value : null,
      photos: profile.photos ? profile.photos[0].value : null,
      accessToken,
      refreshToken,
      provider: profile.provider,
      // You can extract other relevant information from the `profile` object as needed
    };
    // console.log("================================================")
    console.log(profile);

    // You can also pass additional information as the second argument to the `done` function
    // E.g., done(null, user, { message: 'Login successful' });
    done(null, user);
  }
}
