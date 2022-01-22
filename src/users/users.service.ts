import { Injectable } from '@nestjs/common';
import { Tweet } from 'src/tweets/tweets.model';
import { v4 as uuid } from 'uuid';
import { CreateAccountDto } from './dto/create-account.dto';
import { User } from 'src/users/users.model';

@Injectable()
export class UsersService {
  [x: string]: any;
  private users: User[] = [];
  private tweets: Tweet[] = [];

  createAccount(createAccountDto: CreateAccountDto): User {
    const { username } = createAccountDto;

    const user: User = {
      userid: uuid(),
      username,
      tweets: [],
    };

    this.users.push(user);

    return user;
  }

  getAllUsers(): User[] {
    return this.users;
  }

  findUserById(userid: string): User {
    return this.users.find((user) => user.userid == userid);
  }

  findTweetById(tweetid: string): Tweet {
    return this.tweets.find((tweet) => tweet.tweetid == tweetid);
  }

  getTweetsById(userid: string): Tweet[] {
    return this.findUserById(userid).tweets;
  }

  likeTweet(tweetid: string, userid: string): Tweet {
    const username = this.findUserById(userid).username;
    this.findTweetById(tweetid).likedBy.push(username);
    return this.findTweetById(tweetid);
  }

  postTweet(content: string, userid: string): Tweet {
    const username = this.findUserById(userid).username;
    const tweet: Tweet = {
      tweetid: uuid(),
      userid,
      username,
      content,
      likedBy: [],
    };
    this.tweets.push(tweet);
    this.findUserById(userid).tweets.push(tweet);
    return tweet;
  }
}
