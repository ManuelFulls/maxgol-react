
import styles from "./Offers.module.css"


interface Props{
    url:string


}
const Offers =(props:Props)=>{

    const{url}=props


return( 
    <div>
   
    <div className={styles.galeriaport}>
        <div className={styles.imagenport}>
            <img className={styles.foto} src={url} alt=""></img>
        </div>
    </div>
    </div>)
}

export default Offers
