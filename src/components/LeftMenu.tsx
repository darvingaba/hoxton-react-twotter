import { IoIosHome } from "react-icons/io";
import { CgHashtag } from "react-icons/cg";
import { BsPeopleFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import {MdOutlineEmail} from "react-icons/md";
import { MdOutlineBookmarks } from "react-icons/md";
import {CgProfile}from "react-icons/cg";
import {CgMoreO}from "react-icons/cg";
import { Link } from "react-router-dom";


export function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="leftMenuLinks">
        <ul className="leftMenuLinksList">
          <li>
            <a href="#">
              <img className="logo" src="./src/images/logo.png" />
            </a>
          </li>
          <li>
            <Link to={"tweets"}>
              <IoIosHome /> Home
            </Link>
          </li>
          <li>
            <a href="#">
              <CgHashtag /> Explore
            </a>
          </li>
          <li>
            <a href="#">
              <BsPeopleFill /> Communities
            </a>
          </li>
          <li>
            <a href="#">
              <IoMdNotificationsOutline /> Notifications
            </a>
          </li>
          <li>
            <a href="#">
              <MdOutlineEmail /> Messages
            </a>
          </li>
          <li>
            <a href="#">
              <MdOutlineBookmarks /> Bookmarks
            </a>
          </li>
          <li>
            <Link to={"/profile"}>
              <CgProfile /> Profile
            </Link>
          </li>
          <li>
            <a href="#">
              <CgMoreO /> More
            </a>
          </li>
          <li>
            <button className="tweetButton">Tweet</button>
          </li>
        </ul>
      </div>

      <div className="leftMenuProfile">
        <img
          className="profilePic"
          src="https://i.pinimg.com/474x/b3/d1/35/b3d135bcf65b8472e0021dda91083560.jpg"
          alt=""
        />
        <div className="profileInfo">
          <h1 className="profileName">Darvin</h1>
          <h2 className="profileHandle">@darvin</h2>
        </div>
      </div>
    </div>
  );
}
