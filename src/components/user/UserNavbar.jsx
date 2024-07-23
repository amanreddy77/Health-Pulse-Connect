import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataProvider";
import HPCLogo from '../../assets/HPClogo.png';
import { useNavigate } from "react-router-dom";

const UserNavbar = () => {
    const { account, setAccount } = useContext(DataContext);
    const navigate = useNavigate();
    useEffect(() => {
        const storedAccount = JSON.parse(localStorage.getItem('account'));
        if (storedAccount) {
            setAccount(storedAccount);
        }
    }, [setAccount]);
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('account');
        setAccount(null);
        navigate('/');
    };

    return (
        <div>
            <nav className="shadow-lg fixed w-full z-10 mt-[-5px] ">
                <div className="flex justify-between items-center  p-4 navbar">
                    <div className="flex justify-center gap-4 items-center">
                        <img src={HPCLogo} alt="logo" className="h-10" />
                        <strong className="text-2xl flex lg:hidden">HPC</strong>
                    </div>
                    <div className="flex space-x-4">
                        <h2 className="text-2xl text-[#013365] font-semibold hidden lg:flex ">Health-Pulse-Connect</h2>
                    </div>
                    <div className="flex justify-center items-center space-x-4">
                        {account ? (
                            <>
                                <span className="text-blue-500">{account}</span>
                                <button onClick={handleLogout} className="text-white" id="button">Logout</button>
                            </>
                        ) : (
                            <>
                                <a href="/signin" className="text-blue-500">Profile</a>
                                <a href="/signin" className="text-blue-500">Login</a>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default UserNavbar;
