import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, card }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image objectFit="cover" src={card.img ?? "/p1.jpeg"} alt="" fill={true} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{card.createdAt.substring(0, 10)}</span>
          <span className={styles.category}>{card.categorySlug ?? "coding"}</span>
        </div>
        <Link href={`/posts/${card.categorySlug}`}>
          <h1 className={styles.title}>
            {card.title}
          </h1>
        </Link>
        <p className={styles.desc}>
          {card.desc}
        </p>
        <Link href={`/posts/${card.categorySlug}`} className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
