import Pagination from "../pagination/Pagination";
import styles from "./cards.module.css";
import Card from "../card/Card";

const getPostCards = async (page, category) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&category=${category || ""}`, {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("");
  }

  return res.json();
};

const Cards = async ({ page, category }) => {
  const { posts, count } = await getPostCards(page, category);

  const POST_PER_PAGE = 3;

  const isPrevExisted = POST_PER_PAGE * (page - 1) > 0;
  const isNextExisted = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {Array.isArray(posts) && posts.length
          ? posts.map((card) => <Card card={card} key={card._id} />)
          : null}
      </div>
      <Pagination
        isPrevExisted={isPrevExisted}
        isNextExisted={isNextExisted}
        page={page}
      />
    </div>
  );
};

export default Cards;
