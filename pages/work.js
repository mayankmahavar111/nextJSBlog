import Styles from '../styles/work.module.css';
import { iconSvg , workList } from '../components/api/helper';
import { useState } from 'react';
import { listContainerVariant, listItemVariant } from '../components/motion/listMotion'; 
import { motion } from 'framer-motion';

function Work(props) {
  const [workSelection , setWorkSelection] = useState("company");

  const headerForWork = () =>{
    if (props.mobileView){
      return <div className={Styles.headerMobile}>
        <div className={workSelection == 'company' ? Styles.selectedWork : ''} onClick={()=>setWorkSelection('company')}>Company</div>
        <div className={workSelection != 'company' ? Styles.selectedWork : ''} onClick={()=>setWorkSelection("projects")}>Projects</div>
      </div>
    }else{
      return
    }
  }

  return (
          <main>
            <h1>
              Work
            </h1>
            
            {headerForWork()}
            {( !props.mobileView || props.mobileView && workSelection == 'company') && workList.proffesional.length > 0 && 
            <div style={{paddingLeft:"2%"}}>
              <br></br>
              <h2 >Company</h2>
                <motion.div
                  initial = "hidden"
                  animate = "show"
                  variants={listContainerVariant}
                  className={Styles.cardOuterDiv}
                  style={{gridTemplateColumns : `${!props.mobileView ? '50% 50%' : ''}` , gridGap:`${props.mobileView ? '12%' : ''}` }}
                >
                  
                  { workList.proffesional.map((item,key) => {
                    return(
                      <motion.div className={Styles.card} key={key} variants={listItemVariant}>
                        <h3> {item.name} </h3>
                        <div>{item.description}</div>
                        <br></br>
                        <div>{item.contribution}</div>
                        <br></br>
                        <div className={Styles.cardLink}>
                          <div className='floatR'>
                            <a href={item.link}>{ 'Visit' } {iconSvg('link')} </a>
                          </div>
                          {item.startYear && <div>
                            {iconSvg("calender")} {item.startYear} - {item.endYear ? item.endYear : "Till Date"} 
                          </div>}
                            
                        </div>
                      </motion.div>
                    )
                  }) }
                </motion.div>
              <br></br>
            </div>}
            {( !props.mobileView || props.mobileView && workSelection != 'company') &&  workList.personal.length > 0 && 
            <div style={{paddingLeft:"2%", paddingTop:"6%" ,paddingBottom:"5%"}}>
              <div className='padBtm5'>
                <h2 >Projects</h2> 
                <div className='floatR'> <a target={"_blank"}>View All {iconSvg('folder')}</a> </div>
              </div>
              <br></br>
              <motion.div 
                initial = "hidden"
                animate = "show"
                variants={listContainerVariant} 
                className={Styles.cardOuterDiv} 
                style={{gridTemplateColumns : `${!props.mobileView ? '30% 30% 30%' : ''}` , gridGap:`${props.mobileView ? '6%' : '6%'}` , gridRowGap:`${!props.mobileView ? '10%' : '6%'}`}}>
                
                {workList.personal.map((item,key) => {
                  
                  return(
                    <motion.div 
                      variants={listItemVariant}
                      className={Styles.card} 
                      key={key}>
                      <h3> {item.name} </h3>
                      <div>{item.description}</div>
                      <br></br>
                      <div>{item.contribution}</div>
                      <br></br>
                      <div className={Styles.cardLink}>
                        <div className='floatR'>
                          <a href={item.link}>{ 'View Code' } {iconSvg('code')} </a>
                        </div>
                        {item.startYear && <div>
                          {iconSvg("calender")} {item.startYear}
                        </div>}
                          
                      </div>
                    </motion.div>
                  )
                }) }
              </motion.div>
              <br></br>
            </div>}
          </main>
      )
}


export default Work;