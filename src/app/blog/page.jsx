import Cards from '@/components/cards/Cards'
import styles from './blog.module.css'
import Menu from '@/components/menu/Menu'

const Blog = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { category } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{category} Blog</h1>
      <div className={styles.content}>
        <Cards page={page} category={category} />
        <Menu />
      </div>
    </div>
  );
}

export default Blog
