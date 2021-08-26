import styles from '../../../styles/Home.module.css'

export function Prices() {
    return (
        <>
            <div className={styles.LogoWrapper}>
            <img src="images/logo.svg" className={styles.Logo}/>
            <h2 className={styles.LogoTitle}>As melhores histórias <br/> em um só lugar.</h2>
            </div>

           <div className={styles.pricewrapper}>

           <div className={styles.Prices1}>
                
                <h2>R$ 27,90<span>/mês*</span></h2>

                <a className={styles.BuyButton}>Assine agora</a>
            </div>

           </div>
        </>
    ); 
}