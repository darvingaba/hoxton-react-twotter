import { TweetsUl } from "./TweetsUl";

export function Profile(){
    return (
      <div className="profile">
        <div className="profilePictures">
          <img
            className="profileBacground"
            src="https://media.wired.com/photos/5a55b72db1cfb87f3206aa5b/master/pass/Twitter-Hole-featured.jpg"
            style={ { width: "1500px", height: "500px" } }
          />
          <img
            className="profilePicture"
            src="https://i.pinimg.com/474x/b3/d1/35/b3d135bcf65b8472e0021dda91083560.jpg"
          />
        </div>
        <div className="profileInfo"></div>
        <TweetsUl />
      </div>
    );
}