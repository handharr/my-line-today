import { useRef } from "react";
import styles from "./homecarousel.module.scss";
import { Button, Carousel } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const HomeCarousel = ({ data }) => {
  // console.log("carousel", data);
  const carouselRef = useRef(null);
  const handleNext = () => carouselRef.current.next();
  const handlePrev = () => carouselRef.current.prev();

  return (
    <div className={styles.container}>
      <div className={styles.breaking}>
        <span>
          Wapres Ingatkan Pemda untuk Menghentikan dan Menindak Penambang Liar
        </span>
      </div>
      <Carousel ref={carouselRef} className={styles.carousel} autoplay>
        {data?.map((val) => (
          <div key={val.id} className={styles.itemContainer}>
            <div className={styles.item}>
              <img alt="carousel-image" src="./img/carousel-image.jpg" />
            </div>
            <a
              href={val.url ? val.url.url : "/"}
              target="_blank"
              className={styles.title}
            >
              <h3>{val.title}</h3>
            </a>
            <span className={`${styles.tombol} ${styles.tombolKiri}`}>
              <Button
                shape="circle"
                icon={<LeftOutlined />}
                onClick={handlePrev}
              />
            </span>
            <span className={`${styles.tombol} ${styles.tombolKanan}`}>
              <Button
                shape="circle"
                icon={<RightOutlined />}
                onClick={handleNext}
              />
            </span>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

HomeCarousel.defaultProps = {
  data: [],
};

export default HomeCarousel;
