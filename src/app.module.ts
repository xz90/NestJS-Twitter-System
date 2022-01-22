import { Module } from '@nestjs/common';
import { TweetsModule } from './tweets/tweets.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TweetsModule, UsersModule],
})
export class AppModule {}
