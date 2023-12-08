import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="" width={50} height={50} />
          <h1 className={styles.logoText}>Hopago Github</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, neque
          nostrum laborum eveniet amet, culpa accusamus nemo delectus sint
          repudiandae tenetur.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" width={18} height={18} alt="" />
          <Image src="/instagram.png" width={18} height={18} alt="" />
          <Image src="/tiktok.png" width={18} height={18} alt="" />
          <Image src="/youtube.png" width={18} height={18} alt="" />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">React</Link>
          <Link href="/">Training</Link>
          <Link href="/">Philosophy</Link>
          <Link href="/">Coding</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
