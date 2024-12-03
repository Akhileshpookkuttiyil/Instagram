import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <>
      <div className="w-full h-auto flex item-center gap-1 flex-wrap">
        <Link
          to="/"
          className="lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage:
              "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=300",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Link>
      </div>
    </>
  );
};

export default Posts;
