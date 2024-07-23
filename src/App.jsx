import { BrowserRouter, Route, Routes } from "react-router-dom"
import DataProvider from "./context/DataProvider"
import SignUp from "./components/Auth/SignUp"
import SignIn from "./components/Auth/Signin"
import UserProfile from "./components/user/UserProfile"
import Admin from "./components/Admin/Admin"



const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/admin/*" element={<Admin/>}/>
        </Routes>
        
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
