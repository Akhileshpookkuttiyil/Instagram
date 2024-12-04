import { Link } from "react-router-dom";
import { useState } from "react";
// import Settings from "../../../Components/Icons/Settings/Settings";
import LinkIcon from "../../../Components/Icons/LinkIcon/LinkIcon";
import highlightData from "../HighlightsData";
import Tab from "../Profile/Tab/Tab";
import Posts from "../Posts/Posts";
import Reels from "../Reels/Reels";
import Tags from "../Tags/Tags";
import PostIcon from "../../../Components/Icons/Post/post.png";
import ReelsIcon from "../../../Components/Icons/Reels/reel.png";
import TagIcon from "../../../Components/Icons/Tag/tag.png";

const MobileProfile = () => {
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
      <div className="w-full h-auto lg:hidden md:hidden sm:block block text-white">
        {/*  Your Info Section  */}
        <div className="w-full h-auto flex items-center gap-x-8 justify-center mb-3">
          <img
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
            alt="profile image"
            className="rounded-full w-20 h-20 object-cover"
          />
          <div className="flex items-start flex-col gap-y-3">
            {/* username */}
            <Link to="/profile" className="text-lg text-gray-200 font-normal">
              Music Lover
            </Link>
            {/*   Button */}
            <div className="flex items-center gap-x-2">
              <button className="bg-[#1d1d1d] rounded-lg px-4 py-1 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150">
                Edit Profile
              </button>
              <button className="bg-[#1d1d1d] rounded-lg px-4 py-1 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150">
                View archive
              </button>
            </div>
          </div>
        </div>
        {/* Bio */}
        <p className="text-base font-normal text-gray-100">
          🎶 Music Lover <br />
          🎸 Vibing to beats and strings <br />
          🎧 Curating playlists for every mood <br />
          🌍 Exploring the world, one song at a time
        </p>
        {/* Link */}
        <p className="text-base font-normal text-gray-100 flex items-center gap-x-2 mb-5">
          <LinkIcon />
          <Link to="/" className="text-blue-500 hover:underline font-medium">
            www.musiclover.com
          </Link>
        </p>
        {/* Highlights Section */}
        <div className="w-full h-auto flex flex-col items-start gap-y-4 mb-10">
          <div className="w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll">
            {highlightData.map((data) => (
              <Link
                key={data.id}
                to="/"
                className="flex items-center justify-between flex-col"
              >
                <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#1d1d1d] to-[#1d1d1d]">
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
        {/* Posts . Followers . Folowing */}
        <div className="w-full h-auto flex items-center justify-around border-t border-t-[#1d1d1d]">
          <div className="flex items-center flex-col py-3">
            <h6 className="text-base text-white font-medium mb-0">55</h6>
            <p className="text-sm font-thin text-white/40">posts</p>
          </div>
          <div className="flex items-center flex-col py-3">
            <h6 className="text-base text-white font-medium mb-0">1200</h6>
            <p className="text-sm font-thin text-white/40">followers</p>
          </div>
          <div className="flex items-center flex-col py-3">
            <h6 className="text-base text-white font-medium mb-0">100</h6>
            <p className="text-sm font-thin text-white/40">following</p>
          </div>
        </div>
        {/* Posts,Reels,Tagged section  */}
        <div className="w-full h-auto">
          <div className="w-full h-auto flex items-center justify-center gap-x-6 mb-4 border-t border-[#313131]">
            <Tab
              icon={PostIcon}
              isActive={activeTab === "posts"}
              onClick={() => handleTabClick("posts")}
              iconSize="w-5 h-5" // Pass desired icon size as props
              iconMarginTop="mt-2" // Add top margin for the icon
            />
            <Tab
              icon={ReelsIcon}
              isActive={activeTab === "reels"}
              onClick={() => handleTabClick("reels")}
              iconSize="w-5 h-5" // Pass desired icon size as props
              iconMarginTop="mt-2" // Add top margin for the icon
            />
            <Tab
              icon={TagIcon}
              isActive={activeTab === "tagged"}
              onClick={() => handleTabClick("tagged")}
              iconSize="w-5 h-5" // Pass desired icon size as props
              iconMarginTop="mt-2" // Add top margin for the icon
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

export default MobileProfile;
