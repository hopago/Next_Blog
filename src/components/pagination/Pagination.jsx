'use client'

import { useRouter } from 'next/navigation';
import styles from './pagination.module.css';

export default function Pagination({ page, isPrevExisted, isNextExisted }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={!isPrevExisted}
      >
        Previous
      </button>
      <button
        className={styles.button}
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={!isNextExisted}
      >
        Next
      </button>
    </div>
  );
}
