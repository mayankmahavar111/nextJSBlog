import Styles from '../../styles/popup.module.css';
import { motion, AnimatePresence } from "framer-motion";
import { dropInVariant } from '../motion/listMotion';
import { iconSvg } from '../api/helper';

export default function PopUp(props){
    return(
        <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={()=>null}
        >
            {props.showModal && <motion.div
                className={Styles.backdrop}
                onClick={props.handleClose}
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
            >
                <motion.div 
                    onClick={(e)=>e.stopPropagation()}
                    variants={dropInVariant}
                    className={Styles.modalOuterDiv}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className={Styles.iconDiv}>{iconSvg(props.data.statusCode > 0 ? 'succesIcon' : 'errorIcon')}</div>
                    {props.data.message}
                </motion.div>
            </motion.div>}
        </AnimatePresence>
            
    )
}