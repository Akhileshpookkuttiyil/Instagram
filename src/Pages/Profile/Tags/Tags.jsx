import { Link } from "react-router-dom";

const Tagged = () => {
  // Array of fully working image URLs for tagged posts
  const taggedImages = [
    "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/358528/pexels-photo-358528.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/2582933/pexels-photo-2582933.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/3497587/pexels-photo-3497587.jpeg?auto=compress&cs=tinysrgb&w=300",
  ];

  return (
    <div className="w-full h-auto flex items-center gap-1 flex-wrap">
      {taggedImages.map((url, index) => (
        <Link
          key={index}
          to="/"
          className="lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: `url(${url})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Link>
      ))}
    </div>
  );
};

export default Tagged;
