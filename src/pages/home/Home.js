import { useEffect, useState } from "react";
import styles from "./home.module.scss";
import {
  Navbar,
  TabMenu,
  TopCategory,
  HomeCarousel,
  Footer,
} from "../../components";
import NewsSectionPrimary from "./section/NewsSectionPrimary";
import NewsSectionSecondary from "./section/NewsSectionSecondary";

const Home = () => {
  const [data, setData] = useState({});
  const [tabState, setTabState] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("id/portaljson");
        const data = await res.json();
        // console.log(data.result);
        setData(data.result);
      } catch (error) {
        console.log("error", error);
      }
    };
    getData();
  }, []);

  // console.log("ini home");

  return (
    <div>
      <Navbar />
      <TabMenu
        listKategori={data.categoryList}
        tabState={tabState}
        setTabState={setTabState}
      />
      <TopCategory />
      <HomeCarousel
        data={
          data.categories &&
          data.categories[tabState].templates[1].sections[0].articles
        }
      />
      <NewsSectionSecondary
        data={
          data.categories &&
          data.categories[tabState].templates.find((val) => val.type == 63)
        }
      />
      <NewsSectionPrimary
        data={
          data.categories &&
          data.categories[tabState].templates.find((val) => val.type == 6304)
        }
      />
      <Footer />
    </div>
  );
};

export default Home;
