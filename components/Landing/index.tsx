import styles from "./Landing.module.css";
import Link from "next/link";

const Landing = () => {
  return (
    <main className={styles.main}>
      <nav className={styles.navbar}>
        <Link className={styles.link} href="/">
          Inicio
        </Link>
        <Link className={styles.link} href="/productos">
          Productos
        </Link>
        <Link className={styles.link} href="/ofertas">
          Ofertas
        </Link>
      </nav>
      <h1 className={styles.title}>Mini Abarrotes Maxgol</h1>
      <h2 className={styles.titles}>Los mejores precios nuncas antes vistos</h2>
    </main>
  );
};

export default Landing;
