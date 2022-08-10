import { useEffect, useState } from "react";
import { IoIosHeart } from "react-icons/io";
import { useParams } from "react-router-dom";

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
export function SingleTweet() {
    let [tweet, setTweet] = useState<Tweet>({} as Tweet);
    let params = useParams();

    useEffect(() => {
        fetch(`http://localhost:3005/tweets/${params.id}`)
            .then((resp) => resp.json())
            .then((tweetFromServer) => setTweet(tweetFromServer));
    })

   

    
    return (
      <div className="singleTweet">
        <div className="singleTweetHeader">
            <div className="singleTweetHeaderImage">
                <img className="profilePic" 
                src={tweet.profileImageUrl} alt="" />
            </div>
            <div className="singleTweetHeaderUser">
                <h3>{tweet.user}</h3>
            </div>
            <div className="singleTweetHeaderHandle"><h3>{tweet.userHandle}</h3></div>

        </div>
        <div className="singleTweetBody">
            <p>{tweet.text}</p>
            <div className="singleTweetFooter">
                <div className="singleTweetFooterIcons">
                    <div className="singleTweetFooterIconsLike"><IoIosHeart />{tweet.likeCount}</div>
                </div>
            </div>
        </div>
      </div>
    );
}