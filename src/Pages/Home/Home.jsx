import LargeNav from "../../Components/Header/LargeNav/LargeNav"
const Home = () => {
  return (
    <>
    <div className="w-full h-auto flex items-start justify-between lg:gap-x-32 md:gap-x-16 sm:gap-x-8 gap-x-4 relative">
        {/* sidebar */}
        <div className="lg:w-[16%] md:w-[17%] sm:w-none w-none h-[100vh] pt-10 px-3 border-r border-r-gray-500 sticky top-0 left-0 lg:block md:block sm:hidden hidden">
            <LargeNav/>
        </div>
        {/* bottom navbar */}
        {/* feed and profile */}
    </div>
    </>
  )
}

export default Home