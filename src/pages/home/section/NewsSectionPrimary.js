import styles from "./newssectionprimary.module.scss";
import { ArticleCard } from "../../../components";

const NewsSectionPrimary = ({ data }) => {
  if (data) {
    console.log("daftar artikel : ", data.sections);
  }
  return (
    <div className={styles.container}>
      <h2>Artikel Pilihan</h2>
      <div className={styles.wrapper}>
        {data &&
          data.sections[0].articles.map((val, idx) => (
            <ArticleCard key={val.id} data={val} />
          ))}
      </div>
    </div>
  );
};

export default NewsSectionPrimary;
