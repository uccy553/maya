import HealingOutlinedIcon from "@mui/icons-material/HealingOutlined";
import VaccinesOutlinedIcon from "@mui/icons-material/VaccinesOutlined";
import styles from "../styles/Services.module.css";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";

type Props = {};

const Services = (props: Props) => {
  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.div}`}>
        <div className={`${styles.text_div}`}>
          <h3 className={`${styles.heading}`}>Our pet insurance services</h3>
          <div>
            <p className={`${styles.list}`}>
              Pet insurance services offer coverage for veterinary expenses
              related to accidents, illnesses, and other medical conditions.
              These services typically require a monthly or yearly premium, and
              in exchange, the insurance provider will pay a portion of the
              costs associated with eligible veterinary expenses.
            </p>

            <button className={`${styles.btn}`}>See overage details </button>
          </div>
        </div>

        <div className={`${styles.design_div}`}>
          <div className={`${styles.design}`}>
            <div>
              <span className={`${styles.icon_div}`}>
                <HealingOutlinedIcon />
              </span>
              <h3>Injuries & Accidents</h3>
              <p>
                When a pet is injured or involved in an accident, the cost of
                veterinary care can be expensive, and our pet insurance can help
                offset these costs.
              </p>
            </div>
            <div>
              <span className={`${styles.icon_div}`}>
                <VaccinesOutlinedIcon />
              </span>
              <h3>Injuries & Accidents</h3>
              <p>
                When a pet is injured or involved in an accident, the cost of
                veterinary care can be expensive, and our pet insurance can help
                offset these costs.
              </p>
            </div>
            <div>
              <span className={`${styles.icon_div}`}>
                <EventNoteOutlinedIcon />
              </span>
              <h3>Injuries & Accidents</h3>

              <p>
                When a pet is injured or involved in an accident, the cost of
                veterinary care can be expensive, and our pet insurance can help
                offset these costs.
              </p>
            </div>
            <div>
              <span className={`${styles.icon_div}`}>
                <BloodtypeIcon />
              </span>
              <h3>Injuries & Accidents</h3>
              <p>
                When a pet is injured or involved in an accident, the cost of
                veterinary care can be expensive, and our pet insurance can help
                offset these costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
