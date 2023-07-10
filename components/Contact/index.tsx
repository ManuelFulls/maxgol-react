import styles from "./Contact.module.css"


interface Props{
    title:string 
    description: string 

}

const Contact=(props:Props)=>{

    const{title,description}=props

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
        
        </div>
    )

}

export default Contact





