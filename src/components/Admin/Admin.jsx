import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import UserBox from "./Home/Dashboard/UserBox";
import Patients from "./Home/Patients/Patients";
import Appointment from "./Home/Appointments/Appointment";
import Report from "./Home/Reports/Report";
import Messages from "./Home/Messages/Messages";
import Muncipality from "./Home/Muncipality";
import Payouts from "./Home/Payouts";

const Admin = () => {
    return (
        <div className="flex">
            <Navbar/>
            <Routes>
                <Route path="/" element={<UserBox/>} />
                <Route path="patients/*" element={<Patients/>} />
                <Route path="messages/*" element={<Messages/>} />
                <Route path="appointments/*" element={<Appointment/>}/>
                <Route path="reports/*" element={<Report/>}/>
                <Route path="municipality" element={<Muncipality/>}/>
                <Route path="payouts" element={<Payouts/>}/>
            </Routes>
        </div>
    );
};

export default Admin;
