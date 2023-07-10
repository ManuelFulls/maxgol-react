import styles from "./Comments.module.css"

interface Props{
    url:string
    description:string
    title:string


}
const Comments =(props:Props)=>{

    const{url,description,title}=props


return( 
    
        <div className={styles.container}>
            <div className={styles.imagenport}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}> {description}</p>
               
                
            </div>
            <div className={styles.box}>
                <img className={styles.photo} src={url} alt=""></img>
            </div>
           
        </div>
    )
}


export default Comments