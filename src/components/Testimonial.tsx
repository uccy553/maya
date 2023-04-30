import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "../styles/Testimonial.module.css";
import { reviews } from "@/constants/reviews";

const Testimonial = () => {
  const sliderRef = useRef<Slider>(null);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.slider}>
        <h1>What Customers Say About Us</h1>

        <div className={styles.slider}>
          <Slider ref={sliderRef} {...settings}>
            {reviews.map((item) => (
              <div key={item.id}>
                <div className={styles.card}>
                  <div className={styles.quote}>
                    <Image
                      src={item.image1}
                      alt="img"
                      className={styles.quote_img1}
                    />

                    <Image
                      src={item.image2}
                      alt="img"
                      className={styles.quote_img2}
                    />
                  </div>

                  <p>{item.text}</p>

                  <div className={styles.profile}>
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
  );
};

export default Testimonial;
