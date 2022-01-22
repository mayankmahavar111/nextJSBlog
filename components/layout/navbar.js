import styles from '../../styles/navBar.module.css'
import Link from 'next/link'

export default function Navbar(params) {
    const navList  = params.navItems && params.navItems.length > 0 ? params.navItems : [];
    return(
        <nav className={styles.nav_bar}>
            <ul className={styles.navbar_nav}> 
                <li className={`${styles.nav_item} ${styles.logo}`}>
                    <Link href={'/'}>
                        <a  className={styles.nav_link}>
                            <span className={styles.link_text}>M<sup>2</sup></span>
                        </a>
                    </Link>
                </li>
                {navList && navList.map((items,key) => {

                    return(
                        <li className={`${styles.nav_item}`} key={key}>
                            <Link href={items.url}>
                                <a  className={styles.nav_link}>
                                    <span className={styles.link_text}>{items.name}</span>
                                </a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )    
}