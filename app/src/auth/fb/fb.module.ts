import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { FBController } from './fb.controller';
import { FBStrategy } from './fb.strategy';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'facebook' })],
  controllers: [FBController],
  providers: [FBStrategy],
})
export class FBModule {}
