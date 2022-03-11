import Link from 'next/link'
import { useEffect , useState } from 'react';
import Styles from '../../styles/navBar.module.css';
import { iconSvg } from '../api/helper';
import { motion } from 'framer-motion';
import { listContainerVariant , listItemVariant} from '../motion/listMotion';

export default function Navbar(props) {
    const navProps =  props.navItems ? props.navItems : [];
    // const [gridPercent, setGridPercent] =  useState('60% 40%');
    const gridPercent = props.mobileView ? '50% 50%' : '60% 40%';

    return (
        <div className={Styles.navBarOuterDiv} style={{gridTemplateColumns: gridPercent}}>
            <div>
                <Link href={'/'}>
                    <a className={Styles.logoLink}>
                        M<sup>2</sup>
                    </a>
                </Link>
            </div>
                    
                    <motion.div
                        variants={listContainerVariant}
                        initial="hidden"
                        animate="show"
                        className={Styles.navBarInnerDiv}
                    >
                    {navProps && navProps.length > 0 && navProps.map((item,keys)=>{
                        return<Link href={item.url} key={keys}> 
                                <a className={Styles.link}>  
                                    <motion.div variants={listItemVariant} className={Styles.linkDiv}>
                                            {iconSvg(item.name.toLowerCase())} { props.mobileView ==false ? item.name : ''}
                                    </motion.div>
                                </a>
                        </Link>
                    })}
                    </motion.div>
       </div>
    )
}