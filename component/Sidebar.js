import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Sidebar.module.css";
import SidebarOption from "./SidebarOption";
import { BiMoviePlay } from "react-icons/bi";
import { FiMusic } from "react-icons/fi";
import { FiVideo, FiMoreHorizontal } from "react-icons/fi";
import { FiLifeBuoy } from "react-icons/fi";
import { FiSmile } from "react-icons/fi";
import { FiRss } from "react-icons/fi";
import { VscTwitter } from "react-icons/vsc";
import {
  BsBookmark,
  BsBookmarkFill,
  BsPerson,
  BsPersonFill,
} from "react-icons/bs";
function Sidebar({ initialSelectedIcon = "Movie" }) {
  const [selected, setSelected] = useState(initialSelectedIcon);

  return (
    <div className={styles.wrapper}>
      <div className={styles.twitterIconContainer}>
        <VscTwitter />
      </div>
      <div className={styles.navContainer}>
        <SidebarOption
          Icon={selected === "Movie" ? BiMoviePlay : BiMoviePlay}
          text="Movie"
          isActive={Boolean(selected === "Movie")}
          setSelected={setSelected}
          redirect={"/"}
        />
        <SidebarOption
          Icon={selected === "Explore" ? FiMusic : FiMusic}
          text="Musiqa"
          isActive={Boolean(selected === "Musiqa")}
          setSelected={setSelected}
        />
        <SidebarOption
          Icon={selected === "Notifications" ? FiVideo : FiVideo}
          text="Video"
          isActive={Boolean(selected === "Video")}
          setSelected={setSelected}
          redirect={"/video"}
        />
        <SidebarOption
          Icon={selected === "Sport" ? FiLifeBuoy : FiLifeBuoy}
          text="Sport"
          isActive={Boolean(selected === "Sport")}
          setSelected={setSelected}
          redirect={"/sport"}
        />
        <SidebarOption
          Icon={selected === "Mems" ? FiSmile : FiSmile}
          text="Mems"
          isActive={Boolean(selected === "Mems")}
          setSelected={setSelected}
        />
        <SidebarOption
          Icon={selected === "Yangiliklar" ? FiRss : FiRss}
          text="Yangiliklar"
          isActive={Boolean(selected === "Yangiliklar")}
          setSelected={setSelected}
          redirect={"/news"}
        />
        <SidebarOption
          Icon={selected === "Profile" ? BsPersonFill : BsPerson}
          text="Profile"
          isActive={Boolean(selected === "Profile")}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
}
export default Sidebar;
