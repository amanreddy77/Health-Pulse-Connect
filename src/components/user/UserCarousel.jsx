
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const UserCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
    };

    const carouselItems = [
        {
            image: 'https://img.freepik.com/free-photo/researcher-looking-monitor-analysing-brain-scan-while-coworker-discussing-with-patient-background-about-side-effects-mind-functions-nervous-system-tomography-scan-working-laboratory_482257-13071.jpg?t=st=1716920261~exp=1716923861~hmac=0be7d859017a4d81819c0f8c68cbfcc3eb8d88d64a2aea97ef57ff852fccfca4&w=1380',
            title: 'Early Signs of Malnutrition',
            description: 'Identifying early signs of malnutrition can help in timely intervention.'
        },
        {
            image: 'https://img.freepik.com/free-photo/photorealistic-kid-refugee-camp_23-2151494502.jpg?t=st=1716920163~exp=1716923763~hmac=1a42930b5db84f65935d52078d14f73bbbc919d83e3201e01650b0fa0221cce4&w=1060',
            title: 'Nutritional Requirements',
            description: 'Understanding the nutritional requirements of children is crucial for their development.'
        },
        {
            image: 'https://img.freepik.com/free-photo/depressed-woman-hungry-from-dieting_1150-44266.jpg?t=st=1716919965~exp=1716923565~hmac=263b5a700d83c67e8f2113c1ca6973954e3b3a010672527f775f8b2960e7ff9e&w=1060',
            title: 'Healthy Diet Plans',
            description: 'Creating a balanced diet plan to ensure children get all the essential nutrients.'
        },
    ];

    return (
        <div className="w-full mx-auto">
            <h2 className="text-2xl font-semibold text-center my-4">Diagnose Malnutrition</h2>
            <Slider {...settings} className='px-6'>
                {carouselItems.map((item, index) => (
                    <div key={index} className="relative h-80 md:h-96 lg:h-120">
                        <div
                            className="w-full h-full bg-cover bg-center rounded-lg"
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 rounded-lg">
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{item.title}</h3>
                                <p className="mt-2 text-center md:text-lg lg:text-xl">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default UserCarousel;
