import { UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginResponse } from './app.model';
import { LocalAuthGuard } from './auth/strategies/local-auth.guard';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}
}
