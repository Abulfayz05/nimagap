import styles from "../styles/Feed.module.css";
import Post from "../component/Post";
function Feed() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>Home</div>
      </div>

      <Post />
    </div>
  );
}

export default Feed;
