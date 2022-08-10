import { useEffect, useState } from "react";
import { MailListTweet } from "./MainListTweet";

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

export function Profile(){
  let [tweets, getTweets] = useState<Tweet[]>([]);
  console.log(tweets);

  useEffect(() => {
    fetch("http://localhost:3005/tweets")
      .then((resp) => resp.json())
      .then((tweetsFromServer) => getTweets(tweetsFromServer));
  } ,[]);

  let retweetedTweets = tweets.filter((tweet) => tweet.retweetCount > 0);
  


    return (
      <div className="profile">
        <div className="profilePictures">
          {/* <img
            className="profileBacground"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1200,h_628/https://blog.snappa.com/wp-content/uploads/2022/01/twitter-header-size-1.jpg"
          /> */}
          <img
            className="profilePicture"
            src="https://i.pinimg.com/474x/b3/d1/35/b3d135bcf65b8472e0021dda91083560.jpg"
          />
        </div>
        <div className="profileInfo">
          <h1 className="profileName">Darvin</h1>
          <h2 className="profileHandle">@Darvin</h2>
          <h3 className="profileBio">
            I am a software engineer who is passionate about building
            applications that people can use.
          </h3>
          
        </div>
        <ul>
          {retweetedTweets.map((tweet) => (
            <MailListTweet
              tweet={tweet}
              likeTweet={Function}
              retweet={Function}
            />
          ))}
        </ul>
      </div>
    );
}