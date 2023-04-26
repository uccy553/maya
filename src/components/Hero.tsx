import React from "react";
import styles from "../styles/Hero.module.css";
import { dog1, dog2, cat1, cat2 } from "@/assets";
import Image from "next/image";

const Hero = () => {
  return (
    <>
<<<<<<< HEAD
      <div className={`${styles.hero}`}>
        <div className={`${styles.hero_section}`}>
          <div className={`${styles.hero_text}`}>
            <h1>
              Protect Your{" "}
              <span style={{ color: "#5B2585" }}>Furry friend</span> with Pet
              Insurance Coverage
            </h1>
            <p>
              Our Insurance is one of the best pet insurance as we offer various
              policies to help provide financial protection to pet owners by
              covering the cost of vetinary care for their beloved pets. pet
              owner can be rest assured as we help assist pet owners choose the
              policy that best suits their budget and pets health needs.{" "}
            </p>
            <div className={styles.btns}>
              <button className={styles.btn1}>Get Started</button>
              <button className={styles.btn2}>Call</button>
=======
        <div className={`${styles.hero}`}>
            <div className={`${styles.hero_section}`}>
                <div className={`${styles.hero_text}`}>

                    <h1>Protect Your <span style={{ color: '#5B2585' }}>Furry friend</span> with Pet Insurance Coverage</h1>
                    <p>Our Insurance is one of the best pet insurance as we offer various policies to help provide financial protection to pet owners by covering the cost of vetinary care for their beloved pets. pet owner can be rest assured as we help assist pet owners choose the policy that best suits their budget and pets health needs. </p>
                    <div className={styles.btn}>
                        <button className={styles.btn1}>Get Started</button>
                        <button className={styles.btn2}>call</button>
                    </div>
                </div>


                <div className={`${styles.images}`}>
                    <div>
                        <Image src={dog1} alt="dog picture" />
                        <Image src={cat1} alt="cat image" />
                    </div>

                    <div>
                        <Image src={cat2} alt="image of a cat" />
                        <Image src={dog2} alt="image of a dog" />
                    </div>
                </div>

>>>>>>> 1162ea8 (changes)
            </div>
          </div>

          <div className={`${styles.hero_images}`}>
            <Image src={dog1} alt="dog picture" className={`${styles.image}`} />
            <Image src={cat1} alt="cat image" className={`${styles.image}`} />

            <Image
              src={cat2}
              alt="image of a cat"
              className={`${styles.image}`}
            />
            <Image
              src={dog2}
              alt="image of a dog"
              className={`${styles.image}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
