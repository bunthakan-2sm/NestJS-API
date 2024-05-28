import { Controller, Get, UseGuards, Request, Res, Req } from '@nestjs/common';
import { GoogleService } from './google.services';
import { AuthGuard } from '@nestjs/passport';

@Controller('google-auth')
export class GoogleController {
  constructor(private readonly googleService: GoogleService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    console.log('googleAuth');
  }

  @Get('google-redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Request() req) {
    return this.googleService.googleLogin(req);
  }

  @Get('callback')
  @UseGuards(AuthGuard('google'))
  async googleLoginCallback(@Req() req, @Res() res) {
    // console.log(res);
    res.redirect('http://localhost:53086/');
  }

  @Get('logout')
  logout(@Req() req, @Res() res) {
    // Clear the local session or token in your application
    // req.logout();

    // Redirect to the social login provider's logout page
    const socialProviderLogoutURL = 'https://accounts.google.com/logout'; // Replace with the logout URL of your social login provider
    return res.redirect(socialProviderLogoutURL);
  }
}
