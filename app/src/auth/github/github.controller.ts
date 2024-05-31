import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { GithubAuthGuard } from './github.guard';

@Controller('github-auth')
export class GitHubController {
  constructor() {}

  @Get()
  @UseGuards(GithubAuthGuard)
  async githubAuth() {
    console.log('githubAuth');
  }

  @Get('callback')
  @UseGuards(GithubAuthGuard)
  async githubLoginCallback(@Req() req: Request, @Res() res: Response) {
    res.redirect('http://localhost:8080/graphql');
  }

  @Get('logout')
  logout(@Req() req, @Res() res) {
    // Clear the local session or token in your application
    // req.logout();

    // Redirect to the social login provider's logout page
    const socialProviderLogoutURL = 'https://github.com/logout'; // Replace with the logout URL of your social login provider
    return res.redirect(socialProviderLogoutURL);
  }
}
