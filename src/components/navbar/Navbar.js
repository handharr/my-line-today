import styles from "./navbar.module.scss";
import { BrandLogo } from "../../assets";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img src={BrandLogo} />
      <span>Masuk</span>
    </div>
  );
};

export default Navbar;
