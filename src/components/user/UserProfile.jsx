import  { useContext, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserNavbar from './UserNavbar';
import FileUpload from './FileUpload';
import ChildInfo from './ChildInfo';
import { getChild } from '../../services/api';
import { DataContext } from '../../context/DataProvider';
import UserCarousel from './UserCarousel';
import Footer from './Footer';

const UserProfile = () => {
    const [fetchedChildren, setFetchedChildren] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [childUploadId, setChildUploadId] = useState(null);
    const [childFirstName, setChildFirstName] = useState(null);
    const [showFileUpload, setShowFileUpload] = useState(false);
    const { account } = useContext(DataContext);
    const [showChildInfo, setShowChildInfo] = useState(false);

    const handleAddChild = () => {
        setShowChildInfo(true);
    };

    const handleChildCreated = (id) => {
        setShowChildInfo(false);
        setChildUploadId(id);
        setShowFileUpload(false);
        toast.success("Child added successfully!");
    };

    useEffect(() => {
        const fetchChildren = async () => {
            try {
                const response = await getChild();
                setFetchedChildren(response.data);
                setFetchError(null);
            } catch (error) {
                setFetchedChildren([]);
                setFetchError("Error fetching children data");
            }
        };
        fetchChildren();
    }, []);

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const handleChildUpload = (id, firstName) => {
        setChildUploadId(id);
        setChildFirstName(firstName);
        setShowFileUpload(true); 
    };

    const handleCloseFileUpload = () => {
        setChildUploadId(null);
        setChildFirstName(null);
        setShowFileUpload(false); 
    };

    return (
        <div className='bg'>
            <UserNavbar /> <br />
            <h2 className="pt-16 text-center text-3xl font-medium">👋Welcome {account}</h2>
            <UserCarousel />
            <div className='navbar mx-10 my-10 py-4'>
                <div className='flex justify-between items-center'>
                    <h3 className="text-xl font-semibold mb-4 pl-8">Here{"'"}s Your Data:</h3>
                    <button onClick={handleAddChild} id='button2' className='mr-8 bg-[#013365]'>Add Child</button>
                </div>
                {fetchError && <p className="text-red-500">{fetchError}</p>}
                {fetchedChildren.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center mx-auto ">
                        {fetchedChildren.map(child => (
                            <div key={child.id} className="p-4 border rounded-lg drop-shadow-lg bg-white cursor-pointer w-3/4 my-4">
                                <p><strong>First Name: </strong> {child.firstName}</p>
                                <p><strong>Last Name:</strong> {child.lastName}</p>
                                <p><strong>Date of Birth:</strong> {formatDate(child.dateOfBirth)}</p>
                                <p><strong>Gender:</strong> {child.gender}</p>
                                <button onClick={() => handleChildUpload(child.id, child.firstName)} id='button2' className='mt-4 bg-[#013365] flex justify-center mx-auto'>Take Diagnose</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No children data available.</p>
                )}
            </div>
            {showFileUpload && childUploadId && (
                <div className="relative">
                    <button className="absolute top-0 right-4 m-2" id='button2' onClick={handleCloseFileUpload}>
                        <AiOutlineClose size={24} />
                    </button>
                    <FileUpload childId={childUploadId} childFirstName={childFirstName} onClose={handleCloseFileUpload} />
                </div>
            )}
            {showChildInfo && <ChildInfo onChildCreated={handleChildCreated} />}
            <Footer/>
            <ToastContainer />
        </div>
    );
};

export default UserProfile;
