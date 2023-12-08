import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subTitle}>{"What's hopago's on mind?"}</h2>
      <h1 className={styles.title}>Most Popular</h1>

      <MenuPosts isImgExisted={false} />

      <h2 className={styles.subTitle}>{"Discover by topic"}</h2>
      <h1 className={styles.title}>Categories</h1>

      <MenuCategories />

      <MenuPosts isImgExisted={true} />
    </div>
  );
};

export default Menu;
