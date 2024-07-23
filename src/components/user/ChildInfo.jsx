import  { useState } from 'react';
import { addChild, addDocument } from '../../services/api';
import img from '../../assets/amico.png';


const ChildInfo = ({ onChildCreated }) => {
    const [childData, setChildData] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        dateOfBirth: ""
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setChildData({ ...childData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
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
            }

            const response = await addChild(childData);
            if (response && response.status === 200) {
                console.log("Child created successfully");
                onChildCreated(response.data.childId);
                setChildData({
                    firstName: "",
                    lastName: "",
                    gender: "",
                    dateOfBirth: ""
                });
                setSelectedFile(null);
                
            }
        } catch (error) {
            console.error(error.message);
            
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{padding: '2rem 9%'}} className='w-full'>
            <h1 className="font-bold text-2xl text-center">Add Child Profile</h1>
            <div className='flex justify-center gap-16  w-full'>
                <div className='w-1/2'>
                    <img src={img} alt="img" className='w-3/4 ' />
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label className="block mb-4 font-bold pt-2" htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Enter first name"
                            value={childData.firstName}
                            onChange={handleInputChange}
                            className="w-full p-15 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#013365] focus:border-transparent"
                            disabled={loading}
                        />
                        <label className="block mb-4 font-bold pt-2" htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Enter last name"
                            value={childData.lastName}
                            onChange={handleInputChange}
                            className="w-full p-15 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#013365] focus:border-transparent"
                            disabled={loading}
                        />
                        <label className="block mb-4 font-bold pt-2" htmlFor="gender">Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            value={childData.gender}
                            onChange={handleInputChange}
                            className="w-full p-15 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#013365] focus:border-transparent"
                            disabled={loading}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                        <label className="block mb-4 font-bold pt-2" htmlFor="dateOfBirth">Date of Birth</label>
                        <input
                            type="date"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={childData.dateOfBirth}
                            onChange={handleInputChange}
                            className="w-full p-15 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#013365] focus:border-transparent"
                            disabled={loading}
                        />
                        <label className="block mb-4 font-bold pt-2" htmlFor="document">Upload Document</label>
                        <input
                            type="file"
                            id="document"
                            name="document"
                            onChange={handleFileChange}
                            className="w-full p-15 px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                            disabled={loading}
                        /> <br />
                        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded w-full" disabled={loading}>
                            {loading ? "Loading..." : "Add Child"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChildInfo;
