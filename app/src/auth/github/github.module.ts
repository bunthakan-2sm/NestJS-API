import { Module } from '@nestjs/common';
import { GitHubController } from './github.controller';
import { GitHubStrategy } from './github.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'github' })],
  controllers: [GitHubController],
  providers: [GitHubStrategy],
})
export class GitHubModule {}
