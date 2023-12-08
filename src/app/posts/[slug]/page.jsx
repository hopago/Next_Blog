import Menu from "@/components/menu/Menu";
import styles from "./slug.module.css";
import Image from "next/image";
import Comment from "@/components/comment/Comment";

const getPost = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("");
  }

  return res.json();
};

const Slug = async ({ params }) => {
  const { slug } = params;

  const data = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data.title}</h1>
          <div className={styles.user}>
            <div className={styles.userAvatar}>
              <Image
                src={data.user.image ?? "/p1.jpeg"}
                alt=""
                fill={true}
                className={styles.avatar}
              />
            </div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>{data.user.name}</span>
              <span className={styles.userCreatedAt}>
                {data.user.createdAt.tostring(0, 10)}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img ?? "/p1.jpeg"}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: data.desc }}
          ></div>
          <div className={styles.comment}>
            <Comment postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Slug;
