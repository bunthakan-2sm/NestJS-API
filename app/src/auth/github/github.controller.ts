import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { GithubService } from './github.services';
import { Request, Response } from 'express';
import { GithubAuthGuard } from './github.guard';

@Controller('github-auth')
export class GitHubController {
  constructor(private readonly githubService: GithubService) {}

  @Get()
  @UseGuards(GithubAuthGuard)
  async githubAuth() {
    console.log('githubAuth');
  }

  @Get('callback')
  @UseGuards(GithubAuthGuard)
  async githubLoginCallback(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { access_token } = this.githubService.githubLogin(req.user);
    res.cookie('jwt', access_token);
    return { access_token: access_token };
  }
}
