import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { FacebookAuthGuard } from './fb.guard';

@Controller('facebook-auth')
export class FBController {
  constructor() {}

  @Get()
  @UseGuards(FacebookAuthGuard)
  async facebookAuth() {
    console.log('facebookAuth');
  }

  @Get('callback')
  @UseGuards(FacebookAuthGuard)
  async facebookLoginCallback(@Req() req, @Res() res) {
    res.redirect('http://localhost:8080/graphql');
  }

  @Get('logout')
  @UseGuards(FacebookAuthGuard)
  async logout(@Req() req, @Res() res) {
    req.logout();
    res.redirect('http://localhost:8080/graphql');
  }
}
