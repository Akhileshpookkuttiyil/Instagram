import { Link } from "react-router-dom";

const Posts = () => {
  // Array of fully working image URLs
  const postImages = [
    "https://images.pexels.com/photos/2387417/pexels-photo-2387417.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/3497589/pexels-photo-3497589.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/3785701/pexels-photo-3785701.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/4592251/pexels-photo-4592251.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1433393/pexels-photo-1433393.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/2872293/pexels-photo-2872293.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=300",
  ];

  return (
    <div className="w-full h-auto flex items-center gap-1 flex-wrap">
      {postImages.map((url, index) => (
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

export default Posts;
