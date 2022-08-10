import { BiComment } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FiShare } from "react-icons/fi";
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
type TweetProps = {
    tweet: Tweet;
    retweet: Function;
    likeTweet: Function;
}
export function MailListTweet({tweet, retweet,likeTweet}:TweetProps) {
  return (
    
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
          <Link to={`/tweets/${tweet.id}`}>
            <p>{tweet.text}</p>
          </Link>
          <div>
            <ul className="retweetsAndStuff">
              <li>
                <a href="#" />
                <BiComment />
              </li>
              <li onClick={() => retweet(tweet.id)}>
                <a href="#" />
                <AiOutlineRetweet /> {tweet.retweetCount}
              </li>
              <li onClick={() => likeTweet(tweet.id)}
               
              >
                <a href="#" />
                <FcLike /> {tweet.likeCount}
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
    
  );
}
