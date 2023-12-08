import Image from 'next/image';
import styles from './navbar.module.css';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>Hopago.com</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href="/">Home</Link>
        <Link className={styles.link} href="/">Contact</Link>
        <Link className={styles.link} href="/">About</Link>
        <Link className={styles.link} href="/">Sign In</Link>
        <AuthLinks />
      </div>
    </nav>
  );
}

export default Navbar
