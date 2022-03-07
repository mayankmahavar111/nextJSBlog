import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../../styles/projects.module.css';

export default function ProjectCard (props) {
    const cardList  =  props.projectList ? props.projectList : [];

    const [flexDirection , setFlexDirection] = useState('row');

    useEffect(()=>{
        if (typeof window != 'undefined' ){
            if (window.innerWidth < 800 && flexDirection == 'row')
                setFlexDirection('column');
            else if(window.innerWidth > 800 && flexDirection == 'column'){
                setFlexDirection('row');
            }
        }
    },[])

    return <div className={styles.projectListContainer} style={{flexDirection : flexDirection}}>
        {cardList && cardList.map((cardDetails,key) => {
            return <div className={styles.projectCardDiv} key={key}>
                        <div className={styles.cardTitle}>
                            {cardDetails.name.charAt(0).toUpperCase() + cardDetails.name.slice(1)}
                        </div>
                        <div className={styles.cardDescription}>
                            {cardDetails.description}
                        </div>
                
                        <div>
                            <Link href={cardDetails.html_url}>
                                View Project
                            </Link>
                        </div>
                    </div>
        })

        }
    </div>

    return <div className={styles.projectCardDiv}>
        <div className={styles.cardTitle}>
            {cardDetails.name.charAt(0).toUpperCase() + cardDetails.name.slice(1)}
        </div>
        <div className={styles.cardDescription}>
            {cardDetails.description}
        </div>

        <div>
            <Link href={cardDetails.html_url}>
                View Project
            </Link>
        </div>
    </div>
}