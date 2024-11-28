import { Link } from "react-router-dom";
import storiesData from "./StoriesData/StoriesData";
import TextEllipse from "./TextEllipse/TextEllipse";

const Stories = () => {
  return (
    <>
      <div className="lg:max-w-[41vw] md:mx-w-[70vw] sm:max-w-full max-w-full w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll">
      <Link
      to="/"
      key="1"
      className="flex items-center justify-center flex-col flex-shrink-0"
    >
      <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]">
        <img
          src="https://images.pexels.com/photos/1030986/pexels-photo-1030986.jpeg?auto=compress&cs=tinysrgb&h=100&w=100"
          alt="storyImg"
          className="rounded-full w-full h-full object-cover p-[2.7px] bg-black"
        />
      </div>
      <TextEllipse username="beauty" maxLength={9} />
    </Link>
        {storiesData.map((story) => (
          <Link
            to="/"
            key={story.id}
            className="flex items-center justify-center flex-col flex-shrink-0"
          >
            <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]">
              <img
                src={story.imageUrl}
                alt="story img"
                className="rounded-full w-full h-full object-cover p-[2.7px] bg-black"
              />
            </div>
            <TextEllipse username={story.username} maxLength={9} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Stories;
