import styles from "./Offers.module.css";

interface Props {
  url: string;
  description: string;
}
const Offers = (props: Props) => {
  const { url, description } = props;

  return (
    <div>
      <div className={styles.galeriaport}>
        <div className={styles.imagenport}>
          <img className={styles.foto} src={url} alt=""></img>
          <p className={styles.description}> {description}</p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
