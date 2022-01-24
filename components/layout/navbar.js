import styles2 from '../../styles/navBar.module.css'
import styles from '../../styles/navbar.module.scss'
import Link from 'next/link'
import { useState } from 'react';

export default function Navbar(params) {
    const navList  = params.navItems && params.navItems.length > 0 ? params.navItems : [];
    const [navActive, setActive] = useState(0);
    let addCollapse = true
    if (typeof window !== "undefined" && window.innerWidth > 1090){
        addCollapse =false;
    } 

    return (

        <div className={`${styles.sidebar} ${addCollapse ? 'collapse' : ''}`}>
            <span className={styles.logo}>M<sup>2</sup></span>
            <a className={styles.logo_expand} href={'/'}>M<sup>2</sup></a>
            <div className={styles.side_wrapper}>
                <div className={styles.side_title}>MENU</div>
                <div className={styles.side_menu}>
                    {navList.map((items,key)=>{
                        return(
                            <Link href={items.url} key={key}>
                                <a className={`${styles.sidebar_link} ${key == navActive ? 'is-active' : ''}`}  onClick={()=> setActive(key)} >
                                    <svg viewBox="0 0 24 24" fill="currentColor" style={{width:'24px',height:'30px'}}>
                                        <path d="M9.135 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072L3.467 7.965A2.474 2.474 0 002.5 9.867v8.702C2.5 20.464 4.047 22 5.956 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z" />
                                    </svg>
                                    {items.name}
                                </a>
                            </Link>
                        )

                    })}
                </div>
            </div>
       </div>
    )
}