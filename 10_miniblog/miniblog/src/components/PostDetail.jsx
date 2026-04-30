import styles from "./PostDetail.module.css";
import { Link } from "react-router-dom";
import React from "react";

const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdBy}>Criado por: {post.createdBy}</p>
      <p className={styles.createdBy}>
        Criado em:
        {new Date(post.createdAt?.toDate()).toLocaleString("pt-BR", {})}
      </p>
      <div className={styles.tags}>
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </div>
  );
};

export default PostDetail;
