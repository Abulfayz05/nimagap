import styles from "../styles/Feed.module.css";
import sport1 from "../public/sport1.jpg";
import sport2 from "../public/sport2.jpg";
import sport3 from "../public/sport3.jpg";
import Image from "next/dist/client/image";

function Sport() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>Sport</div>
      </div>

      <div className={styles.card}>
        <Image src={sport1} layout="responsive" className={styles.rasm} />
        <div className={styles.title}>
          #Rasman: Temmi Abraham Italiya futbolchilari assotsiatsiyasiga ko'ra
          mart oyining eng yaxshi futbolchisi deb topildi.
        </div>
      </div>

      <div className={styles.card}>
        <Image src={sport2} layout="responsive" className={styles.rasm} />
        <div className={styles.title}>
          "Barselona" ayollari kutilganidek raqibni ayab o'tirmadi.
        </div>
      </div>

      <div className={styles.card}>
        <Image src={sport3} layout="responsive" className={styles.rasm} />
        <div className={styles.title}>
          Karlo Anchelottida Covid-19 testi ijobiy chiqdi, buni "Real Madrid"
          tasdiqladi.‌‌
        </div>
      </div>
    </div>
  );
}

export default Sport;
