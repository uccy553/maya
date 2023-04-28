import React, { useRef } from 'react'
import Slider from 'react-slick';
import Image from 'next/image';
import styles from '../styles/Testimonial.module.css';
import { reviews } from '@/constants/reviews';


const Testimonial = () => {
    const sliderRef = useRef<Slider>(null);

  const handlePrevArrowClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextArrowClick = () => {
    sliderRef.current?.slickNext();
  };



    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3.2,
        slidesToScroll: 3,
        initialSlide: 3,
      
        rtl: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 2.5,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },                                
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              innerWidth: 900,
              initialSlide: 0,
              
            }
          }
        ]
        
      };

  return (
    <>
        <div className={styles.slider}>

        <h1>What Customers Say About Us</h1>

        <div className={styles.slide}>
            <Slider ref={sliderRef} {...settings}>
                {reviews.map((item) => (
                    <div key={item.id}>
                        <div className={styles.card}>
                            <div className={styles.quote}>
                                <Image src={item.image1} alt="img" />
                                <Image src={item.image2} alt="img" />
                            </div>

                            <p>{item.text}</p>

                            <div className={styles.name}>
                              <Image src={item.image} alt={item.title} />
                              <div>
                                <span>{item.name}</span>
                                <small>{item.title}</small>
                              </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        </div>
    </>
  )
}

export default Testimonial