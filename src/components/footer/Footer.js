import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span>Terms Of Use</span>
        <span>Privacy Poilcy</span>
        <span>Disclaimer</span>
      </div>
      <div className={styles.bottom}>
        <span>@Line Corporation</span>
      </div>
    </div>
  );
};

export default Footer;
