import styles from './Footer.module.css'
import React, { useState } from 'react';

function Footer(){

    const [copied, setCopied] = useState(false);

    const copy = () => {
      navigator.clipboard.writeText("sebastuan4@gmail.com");
      setCopied(c => true);
  
      setTimeout(() => {
        setCopied(c => false);
      }, 2000);
    };
    
    function sendEmail(){
        window.location = "mailto:sebastuan4@gmail.com?subject=Job Opportunity";
    }
    return(
        <footer>
            <div className={styles.main}>
                    <div className={styles.email}>
                        <div>
                            <h1>Email Me</h1>
                        </div>
                        <div>
                            <input disabled value="sebastuan4@gmail.com" type="text" />
                            <button onClick={copy}>{copied ? "Copied!" : "Copy"}</button>
                            <button onClick={sendEmail}>Email</button>
                        </div>
                        <div className={styles.info}>
                            <p><a href="https://wa.me/50661956271">Whatsapp</a></p>
                            <p><a href="www.linkedin.com/in/sebastian-alvarado-rojas-654496149">Linkedin</a></p>
                            <p><a href="https://github.com/sebastuan4">Github</a></p>
                        </div>
                    </div>
            </div>
        </footer>
    );
}
export default Footer