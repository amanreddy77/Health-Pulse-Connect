
import { Link } from "react-router-dom";
import logo from "../../../assets/HPClogo.png";


const Navbar = () => {
    return (
        <div className="navbar-container w-40 bg-[#013365] h-[100vh] rounded-tr-2xl rounded-br-2xl pl-[-4rem] overflow-hidden">
            <nav className="">
                <div className="logo-container">
                    <Link to="/" className="flex items-center space-x-3">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="menu-items text-white text-center ">
                    <ul>
                        <li>
                            <Link to="" className="menu-link">
                                Dashboard
                            </Link>
                        </li>
                        <li className="hidden">
                            <Link to="/admin/patients" className="menu-link">
                                Patients
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/messages" className="menu-link">
                                Messages
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/appointments" className="menu-link">
                                Appointments
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/reports" className="menu-link">
                                Reports
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/billings" className="menu-link">
                                Billings
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/payouts" className="menu-link">
                                Payouts
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/settings" className="menu-link">
                                Settings
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/municipality" className="menu-link">
                               Municipality
                            </Link>
                        </li>
                        
                    </ul>
                </div>
                <div className="text-center py-6">
                    <Link to="" className="menu-link text-white text-center">
                        Logout
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;