
import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { FcLineChart } from 'react-icons/fc';
import { GooglePlayButton,AppStoreButton } from "react-mobile-app-button";
const Footer = () => {
    const links = [
        [
            { label: 'Support', key: 'header-2' },
            { label: 'Help center', key: 'item-2-1' },
            { label: 'Terms of service', key: 'item-2-2' },
            { label: 'Legal', key: 'item-2-3' },
            { label: 'Privacy policy', key: 'item-2-4' },
            { label: 'Status', key: 'item-2-5' },
        ],
        [
            { label: 'Support', key: 'header-2' },
            { label: 'Help center', key: 'item-2-1' },
            { label: 'Terms of service', key: 'item-2-2' },
            { label: 'Legal', key: 'item-2-3' },
            { label: 'Privacy policy', key: 'item-2-4' },
            { label: 'Status', key: 'item-2-5' },
        ],
    ];

    return (
        <footer>
            <div className="bg-gray-800 text-white p-8 flex flex-col md:flex-row justify-between items-center">
            
            <div className="mb-8 md:mb-0 md:mr-8">
                <h1 className="flex items-center text-2xl md:text-3xl font-bold"><FcLineChart className="text-2xl" /> Health-Pulse Connect</h1>
                
                <div className="flex  items-start gap-4 mt-4 text-2xl ">
                    <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaInstagram /></a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaFacebook /></a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaLinkedin /></a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaYoutube /></a>
                </div>
            </div>
            <div>
            <div className="flex justify-between items-center gap-12 mb-8 md:mb-0">
                    {links.map((col, index) => (
                        <ul className={`col col-${index + 1} mb-4`} key={`col-${index}`}>
                            {col.map((link, index) => (
                                <li key={`link-${col}-${index}`} className='py-1'>
                                    <a href="." >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
            <div className="block">
    <div className="block md:flex justify-between gap-4">
        <div className="mb-2">
            <GooglePlayButton className="bg-white text-black text-xs py-5 mb-2" height={60} direction={"row"} width={200} />
        </div>
        <div className="mb-2">
            <AppStoreButton className="bg-white text-black" height={60} direction={"row"} width={200} />
        </div>
    </div>

    <label htmlFor="" className="block mb-2 text-gray-300 mr-4">
        Stay up to date
    </label>
    
    <div className="flex flex-col items-center md:flex-row">
        <input
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email"
            className="text-black mb-2 md:mr-2 px-4 py-2 rounded-md focus:outline-none"
        />
        <button className=" text-white px-4 py-2 rounded-md">Subscribe</button>
    </div>
</div>

            
        </div>
        </footer>
    );
};

export default Footer;
