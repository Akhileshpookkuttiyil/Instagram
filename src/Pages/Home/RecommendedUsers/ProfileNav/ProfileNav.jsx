import { Link } from "react-router-dom"

const ProfileNav = () => {
  return (
    <>
    <div className="w-full h-auto flex items-center justify-between">
        <Link to="/profile" className="w-full h-auto flex items-center gap-x-2">
            <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=100&w=100" alt="Profile Image" className="w-12 h-12 rounded-full" />
            <div className="flex items-start gap-y-0 flex-col">
                <p className="text-[0.9rem] text-white font-medium mb-0">Music_Lover</p>
                <h6 className="text-[0.9rem] text-gray-500 font-normal">Music Lover</h6>
            </div>
        </Link>
        <Link to="/" className="text-[0.85rem] text-blue-500 hover:text-gray-200">Switch</Link>
    </div>
    </>
  )
}

export default ProfileNav