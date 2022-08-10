import { BiComment } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FiShare } from "react-icons/fi";
import { useState,useEffect } from "react";


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

    fetch("http://localhost:3005/tweets")
      .then((resp) => resp.json())
      .then((tweetsFromServer) => getTweets(tweetsFromServer));
    
    useEffect(() => {
    fetch("http://localhost:3005/tweets")
      .then((resp) => resp.json())
      .then((tweetsFromServer) => getTweets(tweetsFromServer));
} ,[]);


console.log(tweets);


  let newReversedTweets = tweets.slice().reverse();
  return (
    <ul className="tweetList">
      {newReversedTweets.map((tweet) => (
        <li className="oneTweet" key={tweet.id}>
          <div className="image">
            <img className="profilePic" src={tweet.profileImageUrl} alt="" />
          </div>
          <div className="tweetContent">
            <div className="userInfo">
              <h2 className="userName">{tweet.user}</h2>
              <h2 className="userHandle">{tweet.userHandle}</h2>
            </div>
            <div className="usersTweet">
              <p>{tweet.text}</p>
              <div>
                <ul className="retweetsAndStuff">
                  <li>
                    <a href="#" />
                    <BiComment /> 2
                  </li>
                  <li>
                    <a href="#" />
                    <AiOutlineRetweet /> 2
                  </li>
                  <li>
                    <a href="#" />
                    <FcLike /> 2
                  </li>
                  <li>
                    <a href="#" />
                    <FiShare />
                  </li>
                </ul>
              </div>
              <div className="time">{tweet.created_at}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
