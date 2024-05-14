import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TopDestinations = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    };
    return (

        <Slider {...settings}>
            {destinations.map((d) => (
                <div className='slider-containers'>
                    <div key={d.id} className='bg-white h-[300px] '>
                        <p>{d.destination}</p>
                        <img src={d.image} alt="" />
                    </div>
                </div>
            ))}
        </Slider>
    )
}



const destinations = [
    {   
        id: 1,
        destination: 'Bangkok',
        image: 'destinations/bangkok.jpg',
    },
    {   
        id: 2,
        destination: 'Pattaya',
        image: 'destinations/image-1.jpg'
    },
    {   
        id: 3,
        destination: 'Phuket',
        image: 'destinations/image-1.jpg'
    },
    {   
        id: 4,
        destination: 'Chiang Mai',
        image: 'destinations/image-1.jpg'
    },
    {   
        id: 5,
        destination: 'Chiang Rai',
        image: 'destinations/image-1.jpg'
    }
]

export default TopDestinations