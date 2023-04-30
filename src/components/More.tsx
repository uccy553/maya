import Image from "next/image";
import styles from "../styles/More.module.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SellIcon from "@mui/icons-material/Sell";
import img from "../../public/more_img.png";
import dots from "../../public/more_dots.png";
import rates from "../../public/more_rates.png";

type Props = {};

const More = (props: Props) => {
  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.text_div}`}>
        <h3>What makes our pet insurance more special</h3>
        <p>
          Our platform stands out among other pet insurance companies as we help
          to provide affordable premiums on comprehensive coverage. Our
          insurance plans are also customizable and flexible in terms of policy
          terms, payment options, and coverage levels as policyholders have the
          opportunity to choose the coverage options that are most relevant to
          them and also adjust their coerage to meet changing needs
        </p>

        <div className={`${styles.text_list}`}>
          <p>
            <span>
              <ArrowRightIcon />
            </span>
            Superior customer Services
          </p>
          <p>
            <span>
              <ArrowRightIcon />
            </span>
            Multi pet discount
          </p>
          <p>
            <span>
              <ArrowRightIcon />
            </span>
            24/7 vet consultations
          </p>
        </div>

        <button className={`${styles.btn}`}>Schedule a call now</button>
      </div>
      <div className={`${styles.img_div}`}>
        <Image src={img} alt="couple with pet" className={`${styles.img}`} />
        <Image src={dots} alt="dots" className={`${styles.img_dot}`} />
        <Image src={rates} alt="rates" className={`${styles.img_rates}`} />
      </div>
    </section>
  );
};

export default More;
