import styles from './WorkExp.module.css'
function WorkExp(){
    return(
        <div className={styles.maindiv}>
            <div className={styles.contentdiv}>
                <div className={styles.textdiv}>
                    <h1>My Work Experience</h1>
                    <h2>Customer Service Tier 1<br></br>
                        <mark>Concentrix May 2023 - Feb 2024</mark>
                    </h2>
                    <p></p>
                    <h3>What does the work consist of?</h3>
                    <p>I worked for a very large company that has a lot of web services, including a domain registrar, my job was to help customers with problems in their DNS configuration, web integration and email aliases.</p>
                    <h3>What have I learned?</h3>
                    <p>My experience at concentrix was very good, especially I learned soft skills like how to talk to a customer and the best way to deliver bad news, it also helped me with multitasking, stress management and technical knowledge on DNS records like A, AAAA, MX, SOA etc.</p>
                </div>
                <div className={styles.imagediv}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIPVHhujJghD-jrRIn7-qzZREcMTGMGxQcw&s" alt="" />
                </div>
            </div>
        </div>
    );
}
export default WorkExp