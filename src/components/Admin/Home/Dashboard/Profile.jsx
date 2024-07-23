
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
const Profile = () => {
    return (
        <div className="flex justify-between pt-4 px-4">
            <div>
                <h2></h2>
            </div>
            <div className="flex justify-between items-center" >
                <div  className="flex justify-between items-center gap-4 text-2xl">
                    <div><CiSearch/></div>
                    <div><IoIosNotificationsOutline/></div>
                    <div  className="flex justify-between items-center gap-3"><CiUser/><p className="text-lg"> Dr.Priyanka Jhon</p></div>
                </div>
            </div>
        </div>
    )
}

export default Profile
