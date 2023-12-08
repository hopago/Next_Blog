import Link from "next/link";
import styles from "./categories.module.css";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("");
  }

  return res.json();
};

const Categories = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trend Categories</h1>
      <div className={styles.categories}>
        {data?.map((category) => (
          <Link
            key={category._id}
            href="/blog?category=style"
            className={`${styles.category} ${styles[category.slug]}`}
          >
            {category.img ? (
              <Image
                src={category.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            ) : null}
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
