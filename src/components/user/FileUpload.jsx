import { useState } from 'react';
import { FaCloudUploadAlt, FaFileAlt, FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { uploadFile } from '../../services/api';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FileUpload = ({ child, childFirstName }) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [uploadMessage, setUploadMessage] = useState('');
    const [malnutritionStatus, setMalnutritionStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile.size > 5000000) {
                setError('File size should be less than 5MB');
                setFile(null);
            } else {
                setFile(selectedFile);
                setError('');
                setUploadMessage('');
                setMalnutritionStatus('');
                setUploadSuccess(false);
            }
        }
    };

    const handleRemoveFile = () => {
        setFile(null);
        setError('');
        setUploadMessage('');
        setMalnutritionStatus('');
        setUploadSuccess(false);
    };

    const handleFileUpload = async () => {
        if (file) {
            setLoading(true); 
            try {
                const response = await uploadFile(file);
                if (response && response.status === 200) {
                    setUploadMessage('File uploaded successfully.');
                    const statusValue = response.data.report.value;
                    let statusMessage = '';
                    switch (statusValue) {
                        case 0:
                            statusMessage = 'No malnutrition';
                            break;
                        case 1:
                            statusMessage = 'Medium malnutrition';
                            break;
                        case 2:
                            statusMessage = 'Severe malnutrition';
                            break;
                        default:
                            statusMessage = 'Unknown status';
                    }
                    setMalnutritionStatus(statusMessage);
                    setUploadSuccess(true);
                } else {
                    setUploadMessage('Error uploading file. Please try again.');
                    setMalnutritionStatus('');
                }
            } catch (error) {
                setUploadMessage('Error uploading file. Please try again.');
                setMalnutritionStatus('');
            } finally {
                setLoading(false); 
            }
        } else {
            setError('File is required.');
        }
    };

    const carouselItems = [
        {
            image: 'https://www.savethechildren.org/content/dam/usa/images/global-programs/hunger/bangladesh-malnutrition-ch1124903-rec.jpg/_jcr_content/renditions/original.img.jpg',
        },
        {
            image: 'https://www.savethechildren.org/content/dam/usa/images/global-programs/hunger/child-malnutrition-ch1280323-sq.jpg/_jcr_content/renditions/original.img.jpg',
        },
        {
            image: 'https://media.licdn.com/dms/image/D4D12AQH7axmt4CvOYA/article-cover_image-shrink_720_1280/0/1693411978153?e=2147483647&v=beta&t=cCJMG3O_Iumhb2AsZ53sLIcNrHIgCTtXaXIkCAhAGxQ',
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
    };

    return (
        <div className="flex items-center justify-center mx-auto px-10">
            <div className="flex flex-col items-center justify-center w-1/2 px-10">
                <h2 className="text-2xl font-semibold text-center my-4">Sample Images</h2>
                <Slider {...settings} className="px-6 w-full">
                    {carouselItems.map((item, index) => (
                        <div key={index} className="relative h-80 md:h-96 lg:h-120 flex items-center justify-center">
                            <img src={item.image} alt="img" className="object-cover w-full h-full rounded-lg" />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="flex flex-col items-center justify-center w-1/2 px-10">
                <div className="rounded-lg p-6 h-full w-full border border-gray-300">
                    <h2 className="text-2xl font-bold mb-6 text-center">Upload Your File for {childFirstName}</h2>
                    {!loading && !uploadSuccess && (
                        <div className="flex flex-col items-center border-4 border-dashed border-gray-300 p-6 rounded-lg mb-4 w-full h-48">
                            {!file ? (
                                <>
                                    <FaCloudUploadAlt className="text-gray-400 text-6xl mb-4" />
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        className="hidden"
                                        id="fileInput"
                                    />
                                    <label
                                        htmlFor="fileInput"
                                        className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                                    >
                                        Choose a file
                                    </label>
                                </>
                            ) : (
                                <div className="flex items-center justify-between w-full">
                                    <FaFileAlt className="text-blue-600 text-2xl" />
                                    <span className="ml-4 text-gray-700">{file.name}</span>
                                    <button onClick={handleRemoveFile} id='button1'>
                                        <FaTimesCircle className="text-red-600 text-2xl" />
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                    <div>
                        {loading && (
                            <div className="flex items-center">
                                <p className="loader mt-10 text-3xl"></p>
                            </div>
                        )}
                        {!loading && uploadSuccess && (
                            <div className="flex flex-col items-center">
                                <FaCheckCircle className="text-green-600 text-8xl my-4" />
                                <p className="text-green-600 text-sm mt-4 hidden">{uploadMessage}</p>
                                {malnutritionStatus && <p className="text-blue-600 text-lg mt-4 pt-8">Diagnosis Result: <strong>{malnutritionStatus}</strong></p>}
                            </div>
                        )}
                    </div>
                    {!loading && !uploadSuccess && file && (
                        <button
                            onClick={handleFileUpload}
                            disabled={loading} 
                            className={`bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? <p className='loader'></p> : 'Take Diagnosis'}
                        </button>
                    )}
                    {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default FileUpload;
