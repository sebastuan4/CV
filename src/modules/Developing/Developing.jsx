import styles from './Developing.module.css'
function Developing(){
    return(
        <div className={styles.mainDiv}>
            <div className={styles.mainDiv}> 
                <h1>My Proyects</h1>
                <div className={styles.boxesContainer}>
                    <div className={styles.box}>
                        <h1>Cotizador</h1>
                        <p>This is a Python application made with Tkinter as GUI that works using Selenium to automate the actions taken by employees to quote a car, it looks for information from the National Registry, TSE and CR Autos to enter it in the platform of some insurers such as Lafise, Qualitas, INS and Oceanica, it uses Joblib to do parallel tasks.</p>
                        <p><mark>Python</mark><mark>Selenium</mark><mark>Tkinter</mark></p>
                        <a href="https://github.com/sebastuan4/Cotizador">Look at the Github repository.</a>
                    </div>
                    <div className={styles.box}>
                        <h1>Excel</h1>
                        <p>We wanted to be faster with the report we were giving to companies on the status of their Occupational Risk Insurance so we used Visual Basic with Excel so that with the raw data and a shortcut we could process the data and generate graphs.</p>
                        <p><mark>Excel</mark><mark>VB</mark><mark>Macros</mark></p>
                        <a href="https://github.com/sebastuan4/ExcelGenerador">Look at the Github repository.</a>
                    </div>
                    <div className={styles.box}>
                        <h1>This React Page</h1>
                        <p>This is a React.js web page to show some of my web development skills.</p>
                        <p><mark>React</mark><mark>HTML</mark><mark>CSS</mark><mark>JS</mark></p>
                        <a href="https://github.com/sebastuan4/CV">Look at the Github repository.</a>
                    </div>
                    </div>
                    <h1>Certifications</h1>
                    <div className={styles.certContainer}>
                        <div className={styles.cert}>
                            <div className={styles.imageContainer}>
                                <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-75b99bd3-5697-4e26-aa7f-73d81c4f5a47.jpg?v=1675877991000" alt="" />
                            </div>
                            <div className={styles.textContainer}>
                                <p>
                                Certification in SQL Mastery: Mastered SQL coding, MySQL database management, and advanced techniques in data manipulation, query optimization, and database design, equipped for roles such as SQL developer, Database Administrator, and Business Analyst.
                                </p>
                            </div>
                        </div>

                        <div className={styles.cert}>
                        <   div className={styles.imageContainer}>
                                <img src="https://images.credly.com/size/340x340/images/978f88dc-c247-4093-9d39-6efac3651297/image.png" alt="" />
                            </div>
                            <div className={styles.textContainer}>
                                <p>
                                Cisco verifies the earner of this badge successfully completed the Networking Technician career path and achieved this student level credential. Earner has knowledge of networking fundamentals, how devices communicate, cabling, network addressing and services, basics of configuring Cisco devices, troubleshooting and support of endpoints, networks, and users including diagnostics and documentation as a member of a help desk team, and basic wireless. Participated in up to 50 practice activities.
                                </p>
                            </div>
                        </div>

                        <div className={styles.cert}>
                            <div className={styles.imageContainer}>
                                <img src="https://images.credly.com/size/340x340/images/4e3d6f9f-55d7-4ea7-b0e6-f4d4ff543e22/image.png" alt="" />
                            </div>
                            <div className={styles.textContainer}>
                                <p>
                                Scrum Foundation Professional Certification holders have developed entry-level skills in Scrum that endorse their fundamental knowledge in this framework. They have demonstrated an understanding of the empirical Scrum pillars of transparency, inspection, and adaptation. Their primary focus is on the work of Sprint to make the best possible progress toward these goals.
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        
    );
}

export default Developing
