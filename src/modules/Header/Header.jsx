import styles from './Header.module.css'
import React, { useEffect } from 'react';
function Header(){
    const currentUrl = window.location.pathname;
    useEffect (() => {
        document.getElementById(currentUrl).classList.add(styles["active"])
    }, []);
    

    return(
        <header>
            <div className={styles.mainContainer}>
                <div className={styles.navList}>
                        <a id='/' href="/">About Me</a>
                        <a id='/dev' href="/dev">Developing</a>
                        <a id='/pentest' href="/pentest">Pentesting</a>
                        <a id='/work' href="work">Working Experience</a>
                </div>
            </div>
        </header>
    );
}
export default Header