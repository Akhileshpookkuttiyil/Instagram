import HomeLogo from "../../../assets/navlogo/home.png";
import ExploreLogo from "../../../assets/navlogo/explore.png";
import ReelsLogo from "../../../assets/navlogo/reel.png";
import MessagesLogo from "../../../assets/navlogo/message.png";
import { Link } from "react-router-dom";
const MobileNav = () => {
  const sidebarItems = [
    {
      name: "Explore",
      link: "/explore",
      icon: ExploreLogo,
    },
    {
      name: "Reels",
      link: "/reels",
      icon: ReelsLogo,
    },
    {
      name: "Messages",
      link: "/messages",
      icon: MessagesLogo,
    }
  ];
  return (
    <>
      <div className="w-full h-auto">
        <div className="w-full h-auto flex items-center gap-x-2">
        <Link
          to="/"
          className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group"
        >
          <img
            src={HomeLogo}
            alt="HomeIcon"
            className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300"
          />
        </Link>
        {sidebarItems.map((item) => (
          <Link
            to={item.link}
            key={item.id}
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group"
          >
            <img
              src={item.icon}
              alt="HomeIcon"
              className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300"
            />
            <p className="text-base font-medium text-white lg:block md:hidden sm:hidden hidden">
              {item.name}
            </p>
          </Link>
        ))}
        {/* profile */}
        <Link
              to="/profile"
              className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group"
            >
              <img
                src="https://source.unsplash.com/random/?profile"
                alt="ProfileIcon"
                className="w-6 h-6 rounded-full object-cover group-hover:scale-105 ease-out duration-300"
              />
              <p className="text-base font-medium text-white lg:block md:hidden sm:hidden hidden">
                Profile
              </p>
            </Link>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
