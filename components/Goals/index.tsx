import styles from "./goals.module.css"


interface Props{
    url:string
    title:string 
    description:string 

}

const Goals=(props:Props)=>{

    const{url,title,description}=props

    return(

        <div>
            <div className={styles.galery}>
                <div className={styles.img}>
                    <img className={styles.photo} src={url} alt="" />
                </div>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
            </div>



        </div>
    )

}




export default Goals