import { useState, useEffect } from "react";
import { getReports } from "../../../../services/api";
import Profile from "../Dashboard/Profile";

const Report = () => {
    const [reports, setReports] = useState([]);

    const getReportDetails = async () => {
        try {
            const data = await getReports();
            setReports(data);
        } catch (error) {
            console.error('Error fetching reports:', error);
        }
    };
    
    useEffect(() => {
        getReportDetails();
    }, []);

    return (
        <div className="w-full">
            <Profile/>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Reports</h1>
            </div>
            <div className="mt-4">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">Report ID</th>
                            <th className="border border-gray-400 px-4 py-2">UserID</th>
                            <th className="border border-gray-400 px-4 py-2">Result</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {reports && reports.map(patient => (
                            <tr key={patient.id}  className="cursor-pointer">
                                <td className="border border-gray-400 px-4 py-2">{patient.userID}</td>
                                <td className="border border-gray-400 px-4 py-2">{patient.value}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Report;
