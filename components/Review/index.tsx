//aqui defines las propiedades
import styles from "./Review.module.css"

interface Props{
    titulo: string
    descripcion:string 
    numero:number 
}

const Review=(props:Props)=>{
const {titulo, descripcion,numero}=props

return(
    <div>
     <h3 className={styles.titulo}>
        <span className={styles.numero}>
            {numero}
        </span>
            {titulo}
        </h3>
            <p className={styles.descripcion}>
                {descripcion}
            </p>
    </div>

)
}

export default Review