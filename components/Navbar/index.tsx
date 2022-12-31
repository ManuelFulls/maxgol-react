import Link from "next/link"
import styles from "./Navbar.module.css"
const Navbar=()=>{

return ( 

    <nav className={styles.navbar}>
    <Link className={styles.link} href="/">Inicio</Link>
    <Link className={styles.link} href="/productos">Productos</Link>
    <Link className={styles.link} href="/ofertas">Ofertas</Link>
    </nav>
    
    )

}
export default Navbar