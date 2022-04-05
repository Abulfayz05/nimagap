import Sidebar from "./Sidebar";
import Feed from "./Feed";
import styles from "../styles/Home.module.css";

import Post from "./Post";
function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
