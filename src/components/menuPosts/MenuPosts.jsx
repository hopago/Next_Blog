import Image from "next/image";
import styles from "./menuPosts.module.css";
import Link from "next/link";

const MenuPosts = ({ isImgExisted }) => {


  return (
    <div className={styles.items}>
      <Link href="/post/:postId" className={styles.item}>
        {isImgExisted ? (
          <div className={styles.imageContainer}>
            <Image
              objectFit="cover"
              src="/p1.jpeg"
              alt=""
              fill={true}
              className={styles.img}
            />
          </div>
        ) : null}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>Coding</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h3>
          <div className={styles.detail}>
            <span className={styles.userName}>Hopago</span>
            <span className={styles.date}>12.25.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
