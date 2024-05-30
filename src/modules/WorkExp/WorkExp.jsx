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
                    <img src="https://scontent.fsyq1-1.fna.fbcdn.net/v/t39.30808-6/438224486_829976842505634_6249134618079594911_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hHw9mKZRoEoQ7kNvgFFdXNu&_nc_ht=scontent.fsyq1-1.fna&oh=00_AYDrDvOK62SqQ-2FpMBF6B4NByexfQwYZfaXabMWr5zAdg&oe=66558822" alt="" />
                </div>
            </div>
        </div>
    );
}
export default WorkExp