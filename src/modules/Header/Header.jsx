import styles from './Header.module.css'
import React, { useEffect } from 'react';
function Header(){
    const currentUrl = window.location.pathname;
    useEffect (() => {
        console.log(currentUrl);
        document.getElementById(currentUrl).classList.add(styles["active"])
        
    }, []);
    

    return(
        <header>
            <div className={styles.mainContainer}>
                <div className={styles.navList}>
                        <a id='/CV/' href="/CV/">About Me</a>
                        <a id='/CV/dev' href="/CV/dev">Developing</a>
                        <a id='/CV/pentest' href="/CV/pentest">Pentesting</a>
                        <a id='/CV/work' href="/CV/work">Working Experience</a>
                </div>
            </div>
        </header>
    );
}
export default Header