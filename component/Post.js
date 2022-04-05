import styles from "../styles/Post.module.css";
import Image from "next/dist/client/image";
import Post1 from "../public/Post1.jpg";
import Post2 from "../public/Post2.jpg";
import Post3 from "../public/Post3.jpg";
function Post() {
  return (
    <div>
      <div className={styles.card}>
        <Image src={Post2} layout="intrinsic" className={styles.rasm} />
        <div className={styles.title}>
          Kiyev yaqinida tuyaqushning o‘limi, vayron bo‘lgan - ammo ozod etilgan
          Trostyanets. Urush suratlari
        </div>
      </div>

      <div className={styles.card}>
        <Image src={Post1} layout="intrinsic" className={styles.rasm} />
        <div className={styles.title}>
          O'zbekiston va Qozog'iston o'rtaida temir yo'l aloqasi qurilish
          kechirtirilmoqda
        </div>
      </div>

      <div className={styles.card}>
        <Image src={Post3} layout="intrinsic" className={styles.rasm} />
        <div className={styles.title}>
          Muhokama yakunlandi. Jamoatchilik tanqidiga uchragan hukumat qarori
          loyihasining taqdiri nima bo‘ladi?
        </div>
        <div className={styles.subtitle}>
          Yo‘l-patrul xizmati xodimlarini videotasvirga olish va ularni
          tarqatishni taqiqlashga oid hukumat qarori loyihasi muhokamasi 29-mart
          kuni yakunlandi. Xo‘sh, IIV tashabbusi bilan ishlab chiqilgan ushbu
          hujjat e’tirozlarga qaramay qabul qilinadimi yoki jamoatchilik fikri
          inobatga olinib bu taklifdan voz kechiladimi?
        </div>
      </div>
    </div>
  );
}

export default Post;
