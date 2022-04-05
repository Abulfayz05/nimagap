import { useRouter } from "next/dist/client/router";
import styles from "../styles/SidebarOption.module.css";

function SidebarOption({ text, Icon, isActive, setSelected, redirect }) {
  const router = useRouter();
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        setSelected(text);
        router.push(redirect);
      }}
    >
      <div className={styles.iconContainer}>
        <Icon />
      </div>
      <div className={`${isActive ? styles.textActive : styles.textGeneral}`}>
        {text}
      </div>
    </div>
  );
}

export default SidebarOption;
