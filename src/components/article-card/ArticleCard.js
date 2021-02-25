import styles from "./articlecard.module.scss";

const ArticleCard = ({ horizontal, data }) => {
  // console.log("article", data);
  return (
    <div
      className={`${styles.container} ${
        horizontal ? styles.horizontal : styles.vertical
      }`}
    >
      <img
        src="./img/article-image.jpg"
        alt="card image"
        className={`${styles.image} ${
          horizontal ? styles.imageHor : styles.imageVer
        }`}
      />
      <div className={styles.textWrapper}>
        <a href={data.url.url} target="_blank" className={styles.title}>
          {data.title}
        </a>
        <div className={styles.info}>
          <span className={styles.sumber}>{data.publisher || "Publisher"}</span>
        </div>
      </div>
    </div>
  );
};

ArticleCard.defaultProps = {
  data: {
    publisher: "Publisher",
    title: "This is Title",
    url: { url: "/" },
  },
};

export default ArticleCard;
