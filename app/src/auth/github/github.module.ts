import { Module } from '@nestjs/common';
import { GitHubController } from './github.controller';
import { JwtModule } from '@nestjs/jwt';
import { GithubService } from './github.services';
import { GitHubStrategy } from './github.strategy';

@Module({
  imports: [JwtModule],
  controllers: [GitHubController],
  providers: [GithubService, GitHubStrategy],
})
export class GitHubModule {}
