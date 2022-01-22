import { Module } from '@nestjs/common';
import { TweetsController } from './tweets.controller';
import { TweetsService } from './tweets.service';

@Module({
  controllers: [TweetsController],
  providers: [TweetsService],
})
export class TweetsModule {}
