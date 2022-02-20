import Link from 'next/link'
import Styles from '../../styles/navBar.module.css';

export default function Navbar(props) {
    const navProps =  props.navItems ? props.navItems : [];
    return (
        <div className={Styles.navBarOuterDiv}>
            <div>
                <Link href={'/'}>
                    <a className={Styles.logoLink}>M<sup>2</sup></a>
                </Link>
            </div>
            <div className={Styles.navBarInnerDiv}>
                {navProps && navProps.length > 0 && navProps.map((item,keys)=>{
                    return<Link href={item.url} key={keys}> 
                            <a className={Styles.link}> 
                                <div  className={Styles.linkDiv}>
                                    {item.name}
                                </div>
                            </a>
                    </Link>
                })}

            </div>
       </div>
    )
}