import styles from './Header.module.css';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

function Header(){
    const currentHash = window.location.hash;
    useEffect (() => {
        console.log(currentHash)
        document.getElementById(currentHash).classList.add(styles["active"])
    }, []);
    

    return(
        <header>
            <div className={styles.mainContainer}>
                <div className={styles.navList}>
                        <Link id='#/' to="/">About Me</Link>
                        <Link id='#/dev' to="/dev">Developing</Link>
                        <Link id='#/pentest' to="/pentest">Pentesting</Link>
                        <Link id='#/work' to="/work">Working Experience</Link>
                </div>
            </div>
        </header>
    );
}
export default Header