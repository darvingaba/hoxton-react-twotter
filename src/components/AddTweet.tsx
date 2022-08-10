import { useEffect, useState } from "react";
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


export function AddTweet(){
    let [value, getValue] = useState("");
    let [tweets, getTweets] = useState<Tweet[]>([]);
    
   
        fetch("http://localhost:3005/tweets")
          .then((resp) => resp.json())
          .then((tweetsFromServer) => getTweets(tweetsFromServer));
 
    

    function todate() {
      let date = new Date();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let year = date.getFullYear();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      return `${month}/${day}/${year} ${hour}:${minute}:${second}`;
    }

    function updateServer() {
      fetch("http://localhost:3005/tweets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: value,
          user: "Darvin",
          userHandle: "@Darvin",
          profileImageUrl:
            "https://i.pinimg.com/474x/b3/d1/35/b3d135bcf65b8472e0021dda91083560.jpg",
          likeCount: 0,
          retweetCount: 0,
          id: tweets.length + 1,
          created_at: todate(),
        }),
      });
    }

    
    return (
      <div className="addTweet">
        <h1 className="homeTitle">Home</h1>
        <div className="inputAndImage">
          <img
            className="profilePic"
            src="https://i.pinimg.com/474x/b3/d1/35/b3d135bcf65b8472e0021dda91083560.jpg"
          />
          <input
            className="tweetInput"
            type="text"
            placeholder="What's happening?"
            value={value}
            
            // clear input field after submit

            onChange={(e) => getValue(e.target.value)}
          />
          <button
            onClick=
            {updateServer}
            className="inputTweetButton"
          >
            Tweet
          </button>
        </div>
        <div className="inputIcons"></div>
      </div>
    );
}