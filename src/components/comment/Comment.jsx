'use client'

import Link from "next/link";
import styles from "./comment.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
}

const Comment = ({ postSlug }) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const submitComment = async () => {
    await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug })
    });
    mutate();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment..."
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={submitComment}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment!</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading..."
          : data.length
          ? data.map((comment) => (
              <div className={styles.comment} key={comment._id}>
                <div className={styles.user}>
                  <Image
                    src={comment.user.image ?? "/p1.jpeg"}
                    width={50}
                    height={50}
                    alt=""
                    className={styles.image}
                  />
                  <div className={styles.userInfo}>
                    <div className={styles.userName}>{comment.user.name}</div>
                    <div className={styles.userCreatedAt}>
                      {comment.user.createdAt.tostring(0, 10)}
                    </div>
                  </div>
                </div>
                <p className={styles.desc}>{comment.desc}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Comment;
