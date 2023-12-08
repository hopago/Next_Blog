import Featured from "@/components/featured/Featured";
import styles from "./main.module.css";
import Categories from "@/components/categories/Categories";
import Cards from "@/components/cards/Cards";
import Menu from "@/components/menu/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) ?? 1;

  return (
    <main className={styles.container}>
      <Featured />
      <Categories />
      <section className={styles.content}>
        <Cards page={page} />
        <Menu />
      </section>
    </main>
  );
}
