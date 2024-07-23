import { useLocation } from 'react-router-dom';
import { IoVideocamOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { getDocuments,addDocument } from '../../../../services/api';
import { useEffect, useState } from 'react';
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaCloudUploadAlt } from 'react-icons/fa';

const PatientProfile = () => {
    const { state } = useLocation();
    const { patient, childData } = state || {};
    const [documents, setDocuments] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);

    useEffect(() => {
        if (patient) {
            const fetchDocuments = async () => {
                try {
                    const documents = await getDocuments();
                    setDocuments(documents);
                } catch (error) {
                    console.log("Error while fetching documents", error);
                }
            };
            fetchDocuments();
        }
    }, [patient]);

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    if (!patient) {
        return <p>Loading...</p>;
    }

    const handleDownload = (data, filename) => {
        const blob = new Blob([data], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    };
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        setUploadSuccess(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (selectedFile) {
                const fileResponse = await addDocument(selectedFile);
                if (fileResponse.status !== 200) {
                    throw new Error("Document upload failed");
                }
                console.log("Document uploaded successfully");
                setUploadSuccess(true);
                // Refresh document list after successful upload
                const documents = await getDocuments();
                setDocuments(documents);
                setSelectedFile(null);
            }
        } catch (error) {
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full flex justify-between items-center pt-4 px-4 gap-4">
            <div className="w-3/4 overflow-y-auto h-[90vh]" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <div className="flex justify-between text-xl">
                    <h2 className="font-semibold">Patients {">"} {patient.userName}</h2>
                    <div className="flex justify-around items-center gap-4 text-3xl">
                        <IoVideocamOutline />
                        <IoMdCall />
                    </div>
                </div>
                <div className="bg-[#92A8C6] rounded-2xl pb-4 my-8">
                    <div className="flex items-center gap-4 my-2 py-2 pl-2">
                        <div>
                            <img src="https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg" alt="dp" className="h-[40px] w-[40px] rounded-[50%]" />
                        </div>
                        <div>
                            <h2 className="text-md">Mr. {patient.userName}</h2>
                            <p className="text-xs">Patient Details</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-around text-center">
                            <div>
                                <h2>Date of Birth</h2>
                                <h2 className="text-sm text-white">{formatDate(patient.dateOfBirth)}</h2>
                            </div>
                            <div>
                                <h2>Address</h2>
                                <h2 className="text-sm text-white">{patient.state}</h2>
                            </div>
                            <div>
                                <h2>Martial Status</h2>
                                <h2 className="text-sm text-white">Married</h2>
                            </div>
                            <div>
                                <h2>Scheme</h2>
                                <h2 className="text-sm text-white">Ayushman Bharath</h2>
                            </div>
                        </div>
                        <br />
                        <div className="flex justify-around text-center">
                            <div>
                                <h2>Phone No</h2>
                                <h2 className="text-sm text-white">{patient.phoneNumber}</h2>
                            </div>
                            <div>
                                <h2>Gender</h2>
                                <h2 className="text-sm text-white">{patient.gender}</h2>
                            </div>
                            <div>
                                <h2>State</h2>
                                <h2 className="text-sm text-white">{patient.state}</h2>
                            </div>
                            <div>
                                <h2>Registered on</h2>
                                <h2 className="text-sm text-white">28-APR-24</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="font-semibold text-lg">Child Profile</h2>
                    {childData && childData.length > 0 ? (
                        childData.map(child => (
                            <div key={child.id} className="flex justify-around text-center bg-[#92A8C6] rounded-2xl py-4 my-2">
                                <div>
                                    <h2>First Name</h2>
                                    <h2 className="text-sm text-white">{child.firstName}</h2>
                                </div>
                                <div>
                                    <h2>Last Name</h2>
                                    <h2 className="text-sm text-white">{child.lastName}</h2>
                                </div>
                                <div>
                                    <h2>Gender</h2>
                                    <h2 className="text-sm text-white">{child.gender}</h2>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No child data available</p>
                    )}
                </div>
                <div className="bg-[#92A8C6] rounded-2xl pb-4 my-16">
                    <div className="flex justify-between items-center gap-4 my-2 py-2 px-2">
                        <div className="flex justify-between">
                            <h2>Upcoming Appointments</h2>
                            <h2>Post Appointments</h2>
                        </div>
                        <div>
                            <h2 className="text-md">Add Patients</h2>
                        </div>
                    </div>
                    <div className="flex justify-around text-center">
                        <div>
                            <h2>Date of Birth</h2>
                            <h2 className="text-sm text-white">16-JAN-2003</h2>
                        </div>
                        <div>
                            <h2>Address</h2>
                            <h2 className="text-sm text-white">Hyderabad</h2>
                        </div>
                        <div>
                            <h2>Martial Status</h2>
                            <h2 className="text-sm text-white">Married</h2>
                        </div>
                        <div>
                            <h2>Scheme</h2>
                            <h2 className="text-sm text-white">Ayushman Bharath</h2>
                        </div>
                    </div>
                    <br />
                    <div className="flex justify-around text-center">
                        <div>
                            <h2>Phone No</h2>
                            <h2 className="text-sm text-white">1234567890</h2>
                        </div>
                        <div>
                            <h2>Gender</h2>
                            <h2 className="text-sm text-white">Male</h2>
                        </div>
                        <div>
                            <h2>State</h2>
                            <h2 className="text-sm text-white">Telangana</h2>
                        </div>
                        <div>
                            <h2>Registered on</h2>
                            <h2 className="text-sm text-white">28-APR-24</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-2/5 overflow-y-auto h-[90vh] p-[2rem] sidebox" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <div className="flex justify-between">
                    <h2>Documents</h2>
                    <h2>Add Files</h2>
                </div>
                <div className="h-[40vh] bg-[#D9D9D9] px-4 overflow-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                    {documents && documents.map(doc => (
                        <div key={doc.id} className="flex justify-between items-center bg-[#92A8C6] rounded-2xl py-2 my-2 px-4">
                            <div className='flex justify-between items-center'>
                                <h2>{doc.filename}</h2>
                            </div>
                            <div>
                                <button onClick={() => handleDownload(doc.data.data, doc.filename)} id='button1'><IoCloudDownloadOutline className='text-2xl'/></button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-2">
                    <h2>Medical records</h2>
                    <h2>Add records</h2>
                    
                </div>
                <div className="h-[40vh] bg-[#D9D9D9]">
                <form onSubmit={handleSubmit} className="">
                <>
                                    <FaCloudUploadAlt className="text-gray-400 text-6xl mb-4 flex justify-center mx-auto pt-6" />
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        className="hidden"
                                        id="document"
                                    />
                                    <label
                                        htmlFor="fileInput"
                                        className="cursor-pointer w-1/2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex justify-center mx-auto"
                                    >
                                        Choose a file
                                    </label>
                                </>
                        <button type="submit" className="mt-4 bg-[#013365] text-white py-2 px-4 rounded w-1/2 flex mx-auto" disabled={loading}>
                            {loading ? "Loading..." : "Upload Document"}
                        </button>
                        {uploadSuccess && (
                            <p className="mt-4 text-green-500">Document uploaded successfully!</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PatientProfile;
