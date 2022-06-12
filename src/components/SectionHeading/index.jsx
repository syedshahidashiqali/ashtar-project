import styles from "./index.module.scss";

const SectionHeading = ({ text }) => {
  return (
    <h2 className={styles.headingText}>{text}</h2>
  );
};

export default SectionHeading;