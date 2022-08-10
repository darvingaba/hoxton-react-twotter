import { BiComment } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FiShare } from "react-icons/fi";
import { useState,useEffect } from "react";
import { MailListTweet } from "./MainListTweet";
import { Link } from "react-router-dom";


type Tweet = {
  created_at: string;
  id: number;
  text: string;
  user: string;
  userHandle: string;
  profileImageUrl: string;
  likeCount: number;
  retweetCount: number;
};


export function TweetsUl() {

    let [tweets, getTweets] = useState<Tweet[]>([]);


  
      // fetch("http://localhost:3005/tweets")
      //   .then((resp) => resp.json())
      //   .then((tweetsFromServer) => getTweets(tweetsFromServer));
    
    
    useEffect(() => {
    fetch("http://localhost:3005/tweets")
      .then((resp) => resp.json())
      .then((tweetsFromServer) => getTweets(tweetsFromServer));
} ,[]);

function likeTweet(id: number) {
  
  let newTweets = structuredClone(tweets);
  let tweet = newTweets.findIndex((tweet: Tweet) => tweet.id === id);

  newTweets[tweet].likeCount+=1;
  
  fetch(`http://localhost:3005/tweets/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      likeCount: newTweets[tweet].likeCount,
    }),
  })

  
  getTweets(newTweets);
}
function retweet( id: number) {
  let newTweets = structuredClone(tweets);
  let tweet = newTweets.findIndex((tweet:Tweet) => tweet.id === id);

  newTweets[tweet].retweetCount++;
  
  fetch(`http://localhost:3005/tweets${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      retweetCount: newTweets[tweet].retweetCount,
    })
  })
  getTweets(newTweets);

}


console.log(tweets);


  let newReversedTweets = tweets.slice().reverse();
  return (
    <ul className="tweetList">
      {newReversedTweets.map((tweet) => (
        <MailListTweet  
        key={tweet.id}
        tweet={tweet}
        likeTweet={likeTweet}
        retweet={retweet}

        />
      ))}
    </ul>
  );
}
