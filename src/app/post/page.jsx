'use client'

import Image from 'next/image';
import styles from './post.module.css';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Post = () => {
  const [showServiceButton, setShowServiceButton] = useState(false);
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    const upload = () => {
      
    };

    if (file) {
      upload();
    } else {
      return () => {
      
      }
    }
  }, [file]);

  const router = useRouter();

  const { status } = useSession();

  if (status === "loading") return <div className={styles.loading}>Loading...</div>
  
  if (status === "unauthenticated") return router.push("/");

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button
          className={styles.button}
          onClick={() => setShowServiceButton(!showServiceButton)}
        >
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {showServiceButton ? (
          <div className={styles.addMore}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <label htmlFor="image">
              <button className={styles.serviceButton}>
                <Image src="/image.png" alt="" width={16} height={16} />
              </button>
            </label>
            <button className={styles.serviceButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.serviceButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        ) : null}
        <ReactQuill
          className={styles.textarea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your own mind!"
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
}

export default Post
