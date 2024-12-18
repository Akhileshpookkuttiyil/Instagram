import { useState } from "react";
import { Link } from "react-router-dom";
import Settings from "../../../Components/Icons/Settings/Settings";
import LinkIcon from "../../../Components/Icons/LinkIcon/LinkIcon";
import highlightData from "../HighlightsData";
import Tab from "./Tab/Tab";
import PostIcon from "../../../Components/Icons/Post/post.png";
import ReelsIcon from "../../../Components/Icons/Reels/reel.png";
import TagIcon from "../../../Components/Icons/Tag/tag.png";
import Posts from "../Posts/Posts";
import Reels from "../Reels/Reels";
import Tags from "../Tags/Tags";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [isContentVisible, setContentVisible] = useState(true);

  const handleTabClick = (tab) => {
    setContentVisible(false);

    // delay animation
    setTimeout(() => {
      setActiveTab(tab);
      setContentVisible(true);
    }, 300);
  };

  return (
    <>
      <div className="lg:w-[88%] md:w-[88%] sm:w-full w-full h-auto lg:block md:block sm:hidden hidden">
        {/*  Your Info Section  */}
        <div className="w-full h-auto flex items-center lg:gap-x-20 md:gap-x-16 sm:gap-x-12 gap-x-8 justify-center mb-10">
          <img
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
            alt="profile image"
            className="rounded-full lg:w-44 md:w-44 sm:w-36 w-32 lg:h-44 md:h-44 sm:h-36 h-36 object-cover"
          />
          <div className="flex items-start flex-col">
            <div className="flex items-center gap-x-5 mb-4">
              <Link to="/profile" className="text-lg text-gray-200 font-normal">
                Music Lover
              </Link>
              <div className="flex items-center gap-x-2">
                <button className="bg-[#1d1d1d] rounded-lg px-4 py-1 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150">
                  Edit Profile
                </button>
                <button className="bg-[#1d1d1d] rounded-lg px-4 py-1 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150">
                  View archive
                </button>
              </div>
              <Settings />
            </div>
            {/* Post Followers Following */}
            <div className="flex items-center gap-x-8 mb-4">
              <h6 className="text-base text-gray-100 font-normal">5 posts</h6>
              <Link to="/" className="text-base text-gray-100 font-normal">
                10 followers
              </Link>
              <Link to="/" className="text-base text-gray-100 font-normal">
                20 following
              </Link>
            </div>
            {/* fullname */}
            <p className="text-base font-normal text-gray-100">Music lover</p>
            {/* Bio */}
            <p className="text-base font-normal text-gray-100">
              🎶 Music Lover <br />
              🎸 Vibing to beats and strings <br />
              🎧 Curating playlists for every mood <br />
              🌍 Exploring the world, one song at a time
            </p>
            {/* Link */}
            <p className="text-base font-normal text-gray-100 flex items-center gap-x-2">
              <LinkIcon />
              <Link
                to="/"
                className="text-blue-500 hover:underline font-medium"
              >
                www.musiclover.com
              </Link>
            </p>
          </div>
        </div>
        {/* Highlights Section */}
        <div className="w-full h-auto flex flex-col items-start gap-y-4 mb-10">
          <div className="max-w-[61vw] w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll">
            {highlightData.map((data) => (
              <Link
                key={data.id}
                to="/"
                className="flex items-center justify-between flex-col"
              >
                <div className="w-24 h-24 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#1d1d1d] to-[#1d1d1d]">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="rounded-full h-full w-full object-cover p-[2.5px] bg-black"
                  />
                </div>
                <p className="text-white text-sm mt-1 text-center">
                  {data.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
        {/* Posts,Reels,Tagged section  */}
        <div className="w-full h-auto">
          <div className="w-full h-auto flex items-center justify-center gap-x-6 mb-4 border-t border-[#313131]">
            <Tab
              label="POSTS"
              icon={PostIcon}
              isActive={activeTab == "posts"}
              onClick={() => handleTabClick("posts")}
            />
            <Tab
              label="REELS"
              icon={ReelsIcon}
              isActive={activeTab == "reels"}
              onClick={() => handleTabClick("reels")}
            />
            <Tab
              label="TAGGED"
              icon={TagIcon}
              isActive={activeTab == "tagged"}
              onClick={() => handleTabClick("tagged")}
            />
          </div>
          <div
            className={`mt-4 transition-opacity duration-300 ease-out ${
              isContentVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {activeTab === "posts" && <Posts />}
            {activeTab === "reels" && <Reels />}
            {activeTab === "tagged" && <Tags />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
