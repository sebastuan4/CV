import profilePic from '../../assets/Images/me.png'
import background from '../../assets/Gifts/J4o.gif'
import styles from './About.module.css'
function About(){
    return(
        <div className={styles.principalContainer}>
            <div className={styles.profileCard}>
                <div className={styles.picContainer}>
                    <img className={styles.picture} src={profilePic} alt="Mi imagen de perfil" />
                </div>
                <div className={styles.descriptionContainer}>
                    <h1 className={styles.name}>Sebastian Alvarado Rojas</h1>
                    <h2 className={styles.title}>Systems engineer</h2>
                    <p>I am a systems engineer graduated from Universidad Americana (UAM) with knowledge in <mark className={styles.marks}>Python, HTML, CSS, JS, React, VB, SQL, Networking and Pentesting</mark>, in this webpage you can find my projects, also feel free to visit my <a href="https://github.com/sebastuan4">Github</a> for more details.</p>
                    <img className={styles.backgroudImage} src={background} alt="" />
                </div>
               
            </div>
           
        </div>

    );
}
export default About