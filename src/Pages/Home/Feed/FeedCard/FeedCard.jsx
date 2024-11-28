import instagramFeed from "../FeedData/FeedData";
import { Link } from "react-router-dom";
import Ellipse from "../../../../Components/Icons/Ellipse/Ellipse"
import Like from "../../../../Components/Icons/Like/Like"
import Comment from "../../../../Components/Icons/Comment/Comment"
import Share from "../../../../Components/Icons/Share/Share"
import Save from "../../../../Components/Icons/Save/Save"
import Emoji from "../../../../Components/Icons/Emoji/Emoji"

const FeedCard = () => {
  return (
    <>
      {instagramFeed.map((feed) => (
        <div key={feed.id} className="w-full h-auto mb-6">
          {/* pp and username,time */}
          <div className="w-full h-auto flex items-center justify-between mb-2">
            <div className="flex items-center gap-x-2">
              <Link
                to="/"
                className="flex items-center justify-center flex-col flex-shrink-0"
              >
                <div className="w-10 h-10 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]">
                  <img
                    src={feed.profileImg}
                    alt="feed profileImage"
                    className="rounded-full w-full h-full object-cover p-[2.7px] bg-black"/>
                </div>
              </Link>
              <div className="flex items-center gap-x-2">
                <p className="text text-white text-sm font-medium">{feed.username}</p>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <p className="text text-white text-sm font-medium">{feed.time}</p>
              </div>
            </div>
            <Ellipse/>
          </div>
          {/* Feed img  */}
          <div className="w-full lg:max-h-[75vh] md:max-h-[75vh] sm:max-h-[65vh] max-h-[50vh] lg:h-[70vh] md:h-[60vh] sm:h-[50vh] h-[50vh] lg:min-h-[65vh] md:min-h-[55vh] sm:min-h-[50vh] min-h-[45vh] border border-gray-300 rounded overflow-hidden mb-3">
            <img src={feed.postImg} alt={feed.caption} className="w-full h-full rounded object-center" />
          </div>
          {/* User-Actions(likes,comments,Share&Save) */}
          <div className="w-full h-auto flex items-center justify-between">
            <div className="flex items-center gap-x-3">
                <Like />
                <Comment />
                <Share />
            </div>
            <Save/>
          </div>
          {/* Like count */}
          <Link to="/" className="w-full h-auto flex items-center gap-x-2 text-base text-gray-200 font-medium my-2">
          <div className="flex item-center">
          <img src={feed.mutualFrndImg1} alt={feed.likeCount} className="w-5 h-5 rounded-full object-full p-[1.5px] bg-black" />
          <img src={feed.mutualFrndImg2} alt={feed.likeCount} className="w-5 h-5 rounded-full object-full p-[1.5px] bg-black -ml-3" />
          </div>
          {feed.likeCount} likes
          </Link>
          {/* Caption with Username */}
          <div className="w-full h-auto items-center gap-x-1">
            <div className="w-full h-auto text-sm text-gray-200 font-thin">
            <Link to="/" className="text-white font-medium text-sm me-1">{feed.username}</Link> 
            {feed.caption}
            <Link to="/" className="text-gray-400 font-medium text-sm ms-1">more</Link> 
            </div>
          </div>
          {/* comment count */}
          
            <div className="w-full h-auto text-sm text-gray-200 font-thin">
                <Link to="/" className="text-gray-400 font-normal my-2">View all {feed.commentCount} comments</Link>
            </div>
          {/* comment */}
          <div className="w-full h-auto flex items-center justify-between border-b border-b-gray-500">
            <input type="text" className="w-[90%] h-auto bg-transparent border-none outline-none focus:outline-none text-sm text-gray-400 py-3" placeholder="Add a commment..." />
            <Emoji/>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeedCard;
