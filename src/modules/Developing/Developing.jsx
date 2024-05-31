import styles from './Developing.module.css'

function Developing(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            </div>
        </div>
    );
}

export default Developing
