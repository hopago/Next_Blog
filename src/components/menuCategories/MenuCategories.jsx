import Link from 'next/link';
import styles from './menuCategories.module.css';

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?category=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Style
      </Link>
      <Link
        href="/blog?category=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Style
      </Link>
      <Link
        href="/blog?category=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Style
      </Link>
    </div>
  );
}

export default MenuCategories
