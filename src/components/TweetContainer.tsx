

import {AddTweet } from './AddTweet';
import {TweetsUl } from './TweetsUl';


export function TweetContainer() {


// fetch("http://localhost:3005/tweets")
//   .then((resp) => resp.json())
//   .then((tweetsFromServer) => getTweets(tweetsFromServer));

    return (
      <div className="mainMenu">
        <AddTweet  />
        <TweetsUl  />
      </div>
    );
}