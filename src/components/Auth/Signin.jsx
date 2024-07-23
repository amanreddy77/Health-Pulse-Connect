import google from "../../assets/google.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import backgroundSvg from "../../assets/bg.svg";
import HPClogo from "../../assets/HPClogo.png";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";
import { authenticateLogin } from "../../services/api";

const loginInitialValues = {
    userName: "",
    password: "",
};

const SignIn = () => {
    const [data, setData] = useState(loginInitialValues);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { setAccount } = useContext(DataContext);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    useEffect(() => {
        if (isSubmitted) {
            const authenticateUser = async () => {
                const response = await authenticateLogin(data);
                if (response && response.status === 200) {
                    console.log('Login successful', response.data);
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    setAccount(data.userName);
                    localStorage.setItem('account', JSON.stringify(data.userName)); // Store account in local storage
                    navigate('/user');
                } else {
                    console.log('Login failed', response ? response.data : 'No response from server');
                }
                setIsSubmitted(false);
            };
            authenticateUser();
        }
    }, [isSubmitted, data, setAccount, navigate]);

    return (
        <div style={{ position: 'relative', height: '100vh', padding: '10% 13%' }} className="w-full">
            <div style={{ width: "50%", float: 'left', display: 'flex', flexDirection: 'column' }}>
                <h1 className="font-bold text-2xl p-5" style={{ marginTop: "1%", marginLeft: "12%" }}>Login To Your Account</h1>
                <p className="font-bold text-base">Login to your account so that you can continue saving lives</p>
                <form onSubmit={handleSubmit} className='pt-10'>
                    <label className="block mb-4 font-bold pt-2" htmlFor="userName">Email</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        placeholder="Enter userName"
                        onChange={handleInputChange}
                        className="w-50 p-15 px-3 py-2 border border-gray-300 placeholder-black text-15"
                        style={{ backgroundColor: '#92A8C6', width: "60%", height: "55px" }}
                    />
                    <label className="block mb-4 font-bold pt-5" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleInputChange}
                        className="w-50 p-15 px-3 py-2 border border-gray-300 placeholder-black text-15"
                        style={{ backgroundColor: '#92A8C6', width: "60%", height: "55px" }}
                    />
                    <div style={{ textAlign: 'center', paddingTop: '30px', marginLeft: "-180px" }}>
                        <div className="flex justify-between" style={{ width: '50%', margin: '0 auto' }}>
                            <label style={{ fontSize: '15px' }}>
                                <input type="checkbox" />
                                <span style={{ fontWeight: 'bold', paddingLeft: '10px' }}>Remember me</span>
                            </label>
                            <a href="#" style={{ fontSize: '15px' }}>Forgot password?</a>
                        </div>
                    </div>
                    <p style={{ fontSize: '15px', fontWeight: 'bold', paddingTop: '20px', paddingLeft: "23%" }}>Or Login Using</p>
                    <div style={{ display: 'flex', justifyContent: 'space-around', paddingLeft: "-200px", width: '60%', paddingTop: "20px" }}>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={google} alt="Google" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Facebook" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="Twitter" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                        </a>
                    </div>
                    <div className='pt-5'>
                        <div style={{ width: '40%', marginRight: '2%', paddingLeft: "20%" }}>
                            <button type="submit" style={{ width: '100%', height: "50px", fontSize: '12px', fontWeight: 'bold', padding: '5px 10px', backgroundColor: '#013365', color: 'white' }}>Log in</button>
                        </div>
                    </div>
                </form>
            </div>
            <div style={{ position: 'absolute', right: 0, top: 0 }}>
                <div>
                    <img src={backgroundSvg} alt="Background" style={{ width: '100%', height: '100vh' }} />
                    <img src={HPClogo} alt="Logo" style={{ position: 'absolute', top: '30%', left: '60%', transform: 'translate(-50%, -50%)' }} />
                    <h1 style={{ position: 'absolute', top: '45%', left: '60%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Don{"'"}t have an account yet?</h1>
                    <h3 style={{ position: 'absolute', top: '55%', left: '60%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '15px' }}>
                        Let{"'"}s get you all set up so that you can access all the features that Health Pulse Connect offers.
                    </h3>
                    <button style={{ position: 'absolute', top: '65%', left: '60%',  width: '90px', height: '40px', backgroundColor: 'white', fontWeight: 'bold' }} onClick={()=>naviagte('/')}>SIGN UP</button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
