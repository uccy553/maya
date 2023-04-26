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
              <h3>Conditions & Illness</h3>
              <p>
                We help provide coverage for a range of medical conditions and
                illnesses, such as cancer, diabetes, allergies, and infections.
                Depending on the policy.
              </p>
            </div>
            <div>
              <span className={`${styles.icon_div}`}>
                <EventNoteOutlinedIcon />
              </span>
              <h3>Prescriptions</h3>

              <p>
                we help offset the costs, making it easier for pet owners to
                provide their pets with the necessary medication to manage and
                maintain their health
              </p>
            </div>
            <div>
              <span className={`${styles.icon_div}`}>
                <BloodtypeIcon />
              </span>
              <h3>Dental Work </h3>
              <p>
                we help pets with dental work by covering the cost of dental
                procedures, such as teeth cleaning, extractions, and other
                dental surgeries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
