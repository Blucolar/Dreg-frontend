import Link from "next/link"
import styles from './Header.module.css'

export default function Header() {
    const links = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About Us',
            path: '/about'
        },
        {
            name: 'Our Services',
            path: '/services'
        },
        {
            name: 'Contact Us',
            path: '/contact'
        }
    ]

    return(
        <div style={{maxWidth: '1300px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem'}}>

            <div>
                <img src='./images/logo.png' width='170px' height='57px' alt='logo' />
            </div>

            <div style={{display: 'flex'}}>
                <ul className={styles.ul}>
                    {
                        links.map((item, index) => <Link href={item.path} key={index}><a><li>{item.name}</li></a></Link>)
                    }
                </ul>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{marginRight: '2rem'}}>Login</div>
                    <div>Cart</div>
                </div>
            </div>
            
        </div>
    )
}