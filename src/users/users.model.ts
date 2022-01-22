import { Tweet } from 'src/tweets/tweets.model';

/* eslint-disable prettier/prettier */
export class User {
  userid: string;
  username: string;
  tweets: Tweet[];
}