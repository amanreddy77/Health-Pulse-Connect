import { useContext, useEffect, useState } from 'react';
import loginlogo from '../../assets/HPClogo.png';
import { authenticateSignup } from '../../services/api';
import { useNavigate } from "react-router-dom";
import { DataContext } from '../../context/DataProvider';

const signupInitialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    email:'',
    phoneNumber: "",
    password: "",
    gender: '',
    dateOfBirth: '',
    maritalStatus:'',
    state: ''
};

const SignUp = () => {
    const [data, setData] = useState(signupInitialValues);
    const { setAccount } = useContext(DataContext);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = localStorage.getItem('account');
        if (loggedInUser) {
            setAccount(JSON.parse(loggedInUser));
            navigate('/user');
        }
    }, [navigate, setAccount]);

    const handleInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const response = await authenticateSignup(data);
        if (response && response.status === 200) {
            const token = response.data.token;
            localStorage.setItem('token', token);
            setAccount(data.userName);
            localStorage.setItem('account', JSON.stringify(data.userName)); 
            navigate('/user');
        } else {
            console.log('Signup failed', response ? response.data : 'No response from server');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-900 w-full">
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex max-w-4xl mx-auto w-full">
                <div className="w-1/2 bg-blue-900 text-white flex flex-col justify-center items-center p-8">
                    <div className="mb-8 w-36">
                        <img src={loginlogo} alt='dp' />
                    </div>
                    <h2 className="text-xl mb-4">Already have an Account?</h2>
                    <p className="mb-4">Login so that you can continue saving lives</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/login')}>
                        LOG IN
                    </button>
                </div>
                <div className="w-1/2 p-8">
                    <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
                    <form className="space-y-4" onSubmit={handleSubmit} method="post">
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                placeholder="Your First Name" name='firstName' value={data.firstName} onChange={handleInputChange}
                                className="w-1/2 p-2 border border-gray-300 rounded"
                            />
                            <input
                                type="text"
                                placeholder="Your Last Name" name='lastName' value={data.lastName} onChange={handleInputChange}
                                className="w-1/2 p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <input type="text" placeholder="Enter username" name="userName" value={data.userName} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded" />
                        <input type="text" placeholder="Your Phone Number" name='phoneNumber' value={data.phoneNumber} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded" />
                        <input type='email' name='email' value={data.email} onChange={handleInputChange} placeholder='Email' className="w-full p-2 border border-gray-300 rounded" />
                        <input
                            type="password" name='password' value={data.password} onChange={handleInputChange}
                            placeholder="Enter a Strong Password"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="date" name='dateOfBirth' value={data.dateOfBirth} onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="text" name='gender' value={data.gender} onChange={handleInputChange}
                            placeholder='Gender'
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="text" name='maritalStatus' value={data.maritalStatus} onChange={handleInputChange}
                            placeholder='Marital Status'
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="text" name='state' value={data.state} onChange={handleInputChange}
                            placeholder='State'
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="privacy" className="h-4 w-4" />
                            <label htmlFor="privacy" className="text-sm">I Accept Health Pulse Connect <a href="#privacy" className="text-blue-600">Privacy Policy</a>
                            </label>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" type="submit">
                            Sign Up
                        </button>
                        <div className="flex justify-center space-x-4 mt-4">
                            <button className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded flex items-center">
                                <img src="https://www.google.com/favicon.ico" alt="Google" className="h-5 w-5 mr-2" />
                                Google
                            </button>
                            <button className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded flex items-center">
                                <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="h-5 w-5 mr-2" />
                                Facebook
                            </button>
                            <button className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded flex items-center">
                                <img src="https://www.microsoft.com/favicon.ico" alt="Microsoft" className="h-5 w-5 mr-2" />
                                Microsoft
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
