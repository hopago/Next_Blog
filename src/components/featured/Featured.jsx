import Image from 'next/image';
import styles from './featured.module.css';

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <b>Hopago is come!</b> Discover Hopago's stories and creative ideas.
      </div>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image objectFit='cover' src="/p1.jpeg" alt="" fill={true} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.postTitle}>
            Hopago is coming...
          </div>
          <div className={styles.postDesc}>
            hopago&nbsp;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, consectetur.
          </div>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Featured