import { useEffect, useState } from 'react';
import { CiGrid41, CiCircleList } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { getChildByParentId, getPatients } from '../../../../services/api';

const ProfileDetails = () => {
    const [patients, setPatients] = useState([]);
    const navigate = useNavigate();

    const fetchPatients = async () => {
        try {
            const data = await getPatients();
            setPatients(data);
        } catch (error) {
            console.error('Error fetching patients:', error);
        }
    };

    const handlePatientClick = async (patient) => {
        try {
            const childDataResponse = await getChildByParentId(patient._id);
            navigate(`/admin/patients/${patient._id}`, {
                state: { patient, childData: childDataResponse }
            });
        } catch (error) {
            console.error('Error fetching child data:', error);
        }
    };

    useEffect(() => {
        fetchPatients();
    }, []);

    return (
        <div className="w-full flex justify-between items-center pt-4 px-4 gap-4">
            <div className="w-4/5 overflow-y-auto h-[90vh]" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <h2 className="font-semibold text-lg pb-4">Pediatrician Dashboard</h2>
                <div className="flex justify-between items-center text-white">
                    <button>Patients per Month</button>
                    <button>New Patients</button>
                    <button>Satisfied Patients</button>
                    <button>Recovered Patients</button>
                </div>
                <div className="py-6 px-4">
                    <div className="flex justify-between items-center font-semibold text-lg">
                        <h2>Current Patients</h2>
                        <div className="flex justify-between items-center gap-4">
                            <p className="flex justify-between items-center gap-2"><CiGrid41 /> Grid View</p>
                            <p className="flex justify-between items-center gap-2"><CiCircleList /> List View</p>
                        </div>
                    </div>
                    <div className="pt-6">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="border border-gray-400 px-4 py-2">Name</th>
                                    <th className="border border-gray-400 px-4 py-2">Phone</th>
                                    <th className="border border-gray-400 px-4 py-2">Gender</th>
                                    <th className="border border-gray-400 px-4 py-2">State</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patients.map(patient => (
                                    <tr key={patient.id} onClick={() => handlePatientClick(patient)} className="cursor-pointer">
                                        <td className="border border-gray-400 px-4 py-2">{patient.userName}</td>
                                        <td className="border border-gray-400 px-4 py-2">{patient.phoneNumber}</td>
                                        <td className="border border-gray-400 px-4 py-2">{patient.gender}</td>
                                        <td className="border border-gray-400 px-4 py-2">{patient.state}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="w-1/5 bg-[#D9D9D9] h-[90vh] rounded-tl-2xl rounded-bl-2xl px-4 py-4 overflow-y-auto">
                <div className="block justify-between gap-8 text-white">
                    <div className="flex justify-between items-center">
                        <button className="button1 text-sm">Appointments</button>
                        <button className="button1 text-sm">View</button>
                    </div> <br />
                    <div className="flex justify-between items-center">
                        <button className="button1 text-sm">Upcoming</button>
                        <button className="button1 text-sm">Past</button>
                    </div>
                </div>
                <div className="h-[70vh] overflow-y-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                    <div className="flex items-center gap-4 my-8 py-2 pl-2 bg-[#92A8C6] rounded-2xl">
                        <div>
                            <img src="https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg" alt="dp" className="h-[40px] w-[40px] rounded-[50%]" />
                        </div>
                        <div>
                            <h2 className="text-md">Mr. Srinivas</h2>
                            <p className="text-xs">Consultation, 01 Jun, 10:00 AM</p>
                        </div>
                    </div>
                    {/* Add more consultation entries as needed */}
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;
