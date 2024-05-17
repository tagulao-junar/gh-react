import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TopDestinations = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
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

        <section>
            
            <h1 className='destination-header'>Thailand's Popular Destinations</h1>

            <Slider {...settings}>
                {destinations.map((d) => (
                    <div key={d.id} className='destination-card'>
                        <img src={d.image} alt="" />
                        <p>{d.destination}</p>
                    </div>
                ))}
            </Slider>

        </section>
    )
}



const destinations = [
    {   
        id: 1,
        destination: 'Bangkok',
        image: 'destinations/destination-bangkok.png',
    },
    {   
        id: 2,
        destination: 'Pattaya',
        image: 'destinations/destination-pattaya.png'
    },
    {   
        id: 3,
        destination: 'Phuket',
        image: 'destinations/destination-phuket.png'
    },
    {   
        id: 4,
        destination: 'Chiang Mai',
        image: 'destinations/destination-chiangmai.png'
    },
    {   
        id: 5,
        destination: 'Chiang Rai',
        image: 'destinations/destination-chiangrai.png'
    }
]

export default TopDestinations