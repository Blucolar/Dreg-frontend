import styles from './Footer.module.css'

export default function Footer() {
    return(
        <div style={{maxWidth: '1300px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem'}}>

            <div>
                <img src='./images/logo.png' width='170px' height='57px' alt='logo' />
            </div>

            <ul className={styles.ul}>
                <li>About us</li>
                <li>Privacy policy</li>
                <li>Terms & Conditions</li>
                <li>F.A.Q</li>
            </ul>

        </div>
    )
}