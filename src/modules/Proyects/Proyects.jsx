import styles from './Proyects.module.css'
import React, {useState} from 'react'
function Proyects(){
    const fondos = [
        "https://i.pinimg.com/564x/7a/37/57/7a3757ced4d067d87e8fe8de70a33ad1.jpg",
        "https://i.pinimg.com/564x/5c/1b/70/5c1b701f8f2c8c11276f86a010ace274.jpg",
        "https://i.pinimg.com/564x/af/80/5d/af805d70e523853e0d40cc4983a37614.jpg"
    ]

    const descriptions = [
        "• Car quoter: This is a Python application made with Tkinter as GUI that works using Selenium to automate the actions taken by employees to quote a car. \n • Automated dashboard: We used Visual Basic with Excel to process raw data to generate graphs and. \n • This webpage: This page is made with React.js, HTML and CSS, I hope you enjoy it.",
        "• Finished the Penetration tester specialist course with +250 hacked machines. \n• Sucsessfully passed the eJPT (Junior Penetration Tester) certification from INE",
        "• I have experience from Windows XP to Windows 11 including Windows Server 2019. \n • With Linux I have used Ubuntu, Mint, Parrot, and Kali. \n • I currently have VM Workstation Pro with 3 virtual machines a Windows Server 2019, Windows 10 and ParrotSecurity."
    ]
    const [active,setActive] = useState("btn1");
    const [index,setIndex] = useState(0);

    function change(boton, number){
        document.getElementById(active).classList.remove(styles['active']);
        document.getElementById(boton).classList.add(styles['active']);
        setIndex(i => number)
        setActive(a => boton)
    }

    return(
        <div className={styles.main}>
            <div className={styles.menuContainer}>
                <div className={styles.titleContainer}>
                    <h1>Experience</h1>
                </div>
                <div className={styles.buttonContainer}>
                    <button id="btn1" className={styles.active} onClick={() =>change('btn1',0)}>Developing</button>
                    <button id="btn2" onClick={() =>change('btn2',1)}>Pentesting</button>
                    <button id="btn3" onClick={() =>change('btn3',2)}>OS and Virtualizers</button>
                </div>
            </div>



            <div className={styles.description}>
                    <img src={fondos[index]} alt="" />
                    <div className={styles.descriptionText}>
                        {descriptions[index].split('\n').map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                        <button>Want to know more?</button>
                    </div>


            </div>
        </div>
    ); 
}

export default Proyects