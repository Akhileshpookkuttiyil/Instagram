import MobileProfile from "./MobileProfile/MobileProfile";
import Profile from "./Profile/Profile";

const main = () => {
  return (
    <>
      <div className="lg:w- md:w- sm:w-full w-full min-h-screen lg:py-10 md:py-6 sm:py-4 py-4 lg:px-14 md:px-12 sm:px-7 px-2">
        {/* profile for large screen */}
        <Profile/>
        {/* profile for small screen */}
        <MobileProfile/>
      </div>
    </>
  );
};

export default main;
