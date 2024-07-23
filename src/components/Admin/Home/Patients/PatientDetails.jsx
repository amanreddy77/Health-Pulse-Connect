import { IoVideocamOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
const PatientDetails = () => {
    return (
        <div className="w-full flex justify-between items-center pt-4 px-4 gap-4">
            <div className="w-3/4 overflow-y-auto h-[90vh]" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <div className="flex justify-between text-xl">
                    <h2 className="font-semibold">Patients {">"} Srinivas</h2>
                    <div className="flex justify-around items-center gap-4 text-3xl">
                        <IoVideocamOutline />
                        <IoMdCall />
                    </div>
                </div>
                <div className="bg-[#92A8C6] rounded-2xl pb-4 my-8">
                    <div className=" flex  items-center gap-4 my-2 py-2 pl-2 ">
                        <div>
                            <img src="https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg" alt="dp" className="h-[40px] w-[40px] rounded-[50%]" />
                        </div>
                        <div>
                            <h2 className="text-md">Mr. Srinivas</h2>
                            <p className="text-xs">Patient Details</p>
                        </div>
                    </div>
                    <div>
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
                        </div> <br />
                        <div className="flex justify-around text-center">
                        <div>
                            <h2>Hone No</h2>
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
                <div className="">
                    <h2 className="font-semibold text-lg">Child Profile</h2>
                    <div className="flex justify-around text-center bg-[#92A8C6] rounded-2xl py-4 my-2">
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
                </div>
                <div className="bg-[#92A8C6] rounded-2xl pb-4 my-16">
                    <div className=" flex justify-between  items-center gap-4 my-2 py-2 px-2 ">
                        <div className="flex justify-between">
                            <h2>Upcoming Appointments</h2>
                            <h2>Post Appointments</h2>
                        </div>
                        <div>
                            <h2 className="text-md">Add Patients</h2>
                            
                        </div>
                    </div>
                    <div>
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
                        </div> <br />
                        <div className="flex justify-around text-center">
                        <div>
                            <h2>Hone No</h2>
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
            </div>
            <div className="w-2/5 overflow-y-auto h-[90vh] p-[2rem] sidebox" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <div className="flex justify-between">
                    <h2>Documents</h2>
                    <h2>Add Files</h2>
                </div>
                <div className="h-[40vh] bg-[#D9D9D9]">
                </div>
                <div className="flex justify-between">
                    <h2>Medical records</h2>
                    <h2>Add records</h2>
                </div>
                <div className="h-[40vh] bg-[#D9D9D9]">
                </div>
            </div>
        </div>
    )
}

export default PatientDetails
