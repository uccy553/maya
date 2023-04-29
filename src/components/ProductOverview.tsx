import React, { useState, useEffect } from "react";
import styles from "../styles/ProductOverview.module.css";
import Image from "next/image";
import dogimg from "../../public/PO_dog.png";
import statsimg from "../../public/PO_stats.png";
import pointer from "../../public/pointer.svg";

export interface OverviewType {
  id: number;
  details: string;
}

const overviews: Array<OverviewType> = [
  {
    id: 1,
    details:
      "Financial protection: We provide financial protection in case of unexpected illnesses or injuries. It can help cover the cost of vet bills, surgeries, medications, and other treatments, which can add up to thousands of dollars.",
  },

  {
    id: 2,
    details:
      "Better healthcare: With pet insurance, owners can afford to take their pets to the veterinarian for regular check-ups and preventative care.",
  },

  {
    id: 3,
    details:
      "Travel: Our insurance plan offer coverage for pets when traveling. This can be especially helpful for pet owners who frequently travel with their pets.",
  },
];

const ProductOverview = () => {
  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.div}`}>
        <div className={`${styles.img_div}`}>
          <Image src={dogimg} alt="" className={`${styles.image}`} />
          {/* <div className={`${styles.statsimg_div}`}>
            <Image src={statsimg} alt="" className={`${styles.statsimg}`} />
          </div> */}
        </div>

        <div className={`${styles.text_div}`}>
          <p className={`${styles.title}`}>product overview</p>
          <h3 className={`${styles.heading}`}>
            Why choose <span>Maya's</span> Pet Insurance
          </h3>
          <div>
            {overviews.map((item: OverviewType, index) => (
              <ul className={`${styles.list}`}>
                <li>
                  <span>{item.id}.</span>
                  {item.details}
                </li>
              </ul>
            ))}

            <button className={`${styles.btn}`}>
              Read more{" "}
              <Image
                src={pointer}
                alt="ponter"
                className={`${styles.pointer}`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
