// import { Route, Routes } from "react-router-dom"
import Profile from "../Dashboard/Profile"
import MessageDetails from "./MessageDetails"


const Messages = () => {
    return (
        <div className="w-full">
            <Profile/>
            <MessageDetails/>
        </div>
    )
}

export default Messages
