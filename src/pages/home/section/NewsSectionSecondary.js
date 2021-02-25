import styles from "./newssectionsecondary.module.scss";
import { ArticleCard } from "../../../components";

const NewsSectionSecondary = ({ data }) => {
  return (
    <div className={styles.container}>
      {data &&
        data.sections[0].articles.map((val, idx) => (
          <ArticleCard key={val.id} data={val} horizontal={true} />
        ))}
    </div>
  );
};

export default NewsSectionSecondary;
