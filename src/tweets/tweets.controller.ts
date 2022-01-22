/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller } from '@nestjs/common';
import { TweetsService } from './tweets.service';

@Controller('tweets')
export class TweetsController {
  constructor(private tweetsService: TweetsService) {}
}
