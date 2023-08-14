import Link from 'next/link'
import Styles from '../../styles/navBar.module.css';
import { iconSvg } from '../api/helper';
import { useRouter } from 'next/router';

export default function Navbar(props) {
    const navProps =  props.navItems ? props.navItems : [];
    const gridPercent = props.mobileView ? '50% 50%' : '60% 40%';

    const router = useRouter()
    const showBack =  window.location.href.includes("interview/") 

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
                                <div  className={Styles.linkDiv} >
                                    {iconSvg(item.name.toLowerCase())} { props.mobileView ==false ? item.name : ''}
                                </div>
                            </a>
                    </Link>
                })}

            </div>
        
            {showBack && <button role='link' onClick={()=> { router.back()}} >{"<"}</button> }
       </div>
    )
}