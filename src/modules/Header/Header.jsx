import styles from './Header.module.css';
import React, { useEffect, useState} from 'react';
import { Link } from "react-router-dom";

function Header(){
    const [currentHash, setCurrentHash] = useState(window.location.hash);

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentHash(window.location.hash);
        };
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);
    

    return(
        <header>
            <div className={styles.mainContainer}>
                <div className={styles.navList}>
                    <Link className={currentHash === '#/' ? styles.active : ''} to="/">About Me</Link>
                    <Link className={currentHash === '#/dev' ? styles.active : ''} to="/dev">Developing</Link>
                    <Link className={currentHash === '#/pentest' ? styles.active : ''} to="/pentest">Pentesting</Link>
                    <Link className={currentHash === '#/work' ? styles.active : ''} to="/work">Working Experience</Link>
                </div>
            </div>
        </header>
    );
}
export default Header