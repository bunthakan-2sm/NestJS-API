import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';

@Injectable()
export class FBStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    super({
      clientID: process.env.FB_CLIENT_ID,
      clientSecret: process.env.FB_SECRET_ID,
      callbackURL: 'http://localhost:8080/facebook-auth/callback', // Replace with your callback URL
      profileFields: [
        'id',
        'displayName',
        'email',
        'picture',
        'cover',
        'gender',
        'birthday',
      ], // Specify the required profile fields
      passReqToCallback: true, // If you want to access the `request` object in the verify callback
    });
  }
  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any,
  ) {
    // Here, the user's Facebook profile data will be available in the `profile` object
    // You can access the profile data and use it in your application

    // Example: Extracting user information
    console.log('profile', profile);
    const user = {
      id: profile.id,
      name: profile.displayName ? profile.displayName : profile.username,
      email: profile.email ? profile.email[0].value : null,
      photos: profile.photos ? profile.photos[0].value : null,
      gender: profile.gender ? profile.gender[0].value : null,
      accessToken,
      refreshToken,
      provider: profile.provider,
      firstName: profile.name.given_name,
      lastName: profile.name.family_name,
      // You can extract other relevant information from the `profile` object as needed
    };
    // console.log("================================================")
    // console.log("user",user)
    // You can also pass additional information as the second argument to the `done` function
    // E.g., done(null, user, { message: 'Login successful' });
    done(null, user, { message: 'Login successful' });
  }
}
