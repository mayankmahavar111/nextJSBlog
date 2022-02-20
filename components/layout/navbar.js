import Link from 'next/link'
import { useEffect , useState } from 'react';
import Styles from '../../styles/navBar.module.css';

export default function Navbar(props) {
    const navProps =  props.navItems ? props.navItems : [];
    const [gridPercent, setGridPercent] =  useState('60% 40%');

    useEffect(()=>{
        if (typeof window !='undefined' && window.innerWidth < 800 && gridPercent == '60% 40%'){
            setGridPercent('50% 50%')
        }

    },[])

    return (
        <div className={Styles.navBarOuterDiv} style={{gridTemplateColumns: gridPercent}}>
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