import styles from './Certificates.module.css'

function Certificates(props){
    return(
        <div className={styles.mainDiv}>
            <h1>{props.title}</h1>
            <div className={styles.certContainer}>
                <div className={styles.cert}>
                    <div className={styles.imageContainer}>
                        <img src={props.titleImage} alt="" />
                    </div>
                    <div className={styles.textContainer}>
                        <div>
                            <p>{props.about}</p>
                        </div>
                        <div className={styles.skills}>
                            <div className={styles.markedText}>
                               {props.skills.map(item => <mark>{item}</mark>)}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Certificates;
