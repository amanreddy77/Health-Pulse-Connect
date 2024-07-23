import { Routes, Route } from 'react-router-dom';

import PatientProfile from "./PatientProfile"
import Profile from '../Dashboard/Profile';


const Patients = () => {
    return (
        <div className="w-full">
            <Profile/>
            <Routes>
                <Route path=":patientId" element={<PatientProfile/>} />
            </Routes>
        </div>
    );
};

export default Patients;
