import { Link } from "react-router-dom";
import reelsData from "../ReelsData/ReelsData";
import Liked from "../../../../Components/Icons/Like/Liked.png";
import Comment from "../../../../Components/Icons/Comment/Commented.png";

const ReelCard = () => {
  return (
    <>
      {reelsData.map((reel) => (
        <Link
          key={reel.id}
          to="/"
          className="lg:w-[24.675%] md:w-[24.675%] sm:w-[32.5%] w-[32.5%] lg:h-[48vh] md:h-[40vh] sm:h-[35vh] h-[30vh] relative group"
          style={{
            backgroundImage: `url(${reel.thumbnail})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <video
            src={reel.video}
            title="reel video"
            loop
            muted
            autoPlay
            className="w-full h-full object-cover"
          ></video>
          <div className="hidden group-hover:flex items-center justify-center gap-x-3 absolute top-[50%] left-[50%] translate-x-[-50%] -translate-y-[50%]">
            <div className="flex items-center gap-x-1">
              <img src={Liked} alt="Like icon" className="w-6 h-6" />
              <p className="text-base text-white font-medium">
                {reel.likeCount}
              </p>
            </div>
            <div className="flex items-center gap-x-1">
              <img src={Comment} alt="Comment icon" className="w-6 h-6" />
              <p className="text-base text-white font-medium">
                {reel.commentCount}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ReelCard;
