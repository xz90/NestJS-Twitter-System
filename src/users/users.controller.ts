import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Tweet } from 'src/tweets/tweets.model';
import { CreateAccountDto } from './dto/create-account.dto';
import { User } from './users.model';
import { UsersService } from 'src/users/users.service';
// import { TweetsService } from 'src/tweets/tweets.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  creatAccount(@Body() createAccountDto: CreateAccountDto): User {
    return this.usersService.createAccount(createAccountDto);
  }

  @Post('/:userid/post')
  postTweet(
    @Body('content') content: string,
    @Param('userid') userid: string,
  ): Tweet {
    return this.usersService.postTweet(content, userid);
  }

  @Patch('/:userid/like/:tweetid')
  likeTweet(
    @Param('tweetid') tweetid: string,
    @Param('userid') userid: string,
  ): Tweet {
    return this.usersService.likeTweet(tweetid, userid);
  }

  @Get('/:userid/view')
  viewAnotherUser(@Param('userid') userid: string): Tweet[] {
    return this.usersService.getTweetsById(userid);
  }

  @Get()
  getAllUsers(): User[] {
    return this.usersService.getAllUsers();
  }
}
