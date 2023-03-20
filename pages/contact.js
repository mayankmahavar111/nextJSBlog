import { iconSvg } from "../components/api/helper"
import Styles from '../styles/contact.module.css'
import {LazyMotion,domAnimation, motion } from "framer-motion"
import { listContainerVariant , listItemVariant} from "../components/motion/listMotion"
import { contactList } from "../components/api/helper"

export default function Contact(props) {

    return (
          <main>
            <h1>
              Contact Info
            </h1>
            <div>
              Contact Form coming soon ... 
            </div>
            {contactList.profile && contactList.profile.length >0 && 
              <div>
                <h3>Profile links </h3>
                <br></br>
                <LazyMotion features={domAnimation}>
                  <motion.div
                      initial = "hidden"
                      animate = "show"
                      variants={listContainerVariant}
                      className={`${Styles.linkOuterDiv}`}
                    >
                      {contactList.profile.map((item,key) => {

                          return <motion.div
                              variants={listItemVariant}
                              className={`mAuto`}
                              key = {key}
                            > 
                                <a target={'_blank'} rel="noreferrer" href={item.link}>{iconSvg(item.name.toLocaleLowerCase())} {props.mobileView == false? item.name : ''}</a>

                            </motion.div>
                        })}

                  </motion.div>
                </LazyMotion>
                  
              </div>
            }
            {contactList.connect && contactList.connect.length >0 && 
              <div>
                <h3>Connect links </h3>
                <br></br>
                <motion.div
                  initial = "hidden"
                  animate = "show"
                  variants={listContainerVariant}
                  className={` ${Styles.linkOuterDiv}`}
                >
                  {contactList.connect.map((item,key) => {

                      return <motion.div
                          variants={listItemVariant}
                          className={`mAuto`}
                          key = {key}
                        > 
                            <a target={'_blank'}  rel="noreferrer" href={item.link}>{iconSvg(item.name.toLocaleLowerCase())} {props.mobileView == false? item.name : ''}</a>

                        </motion.div>
                    })}

                </motion.div>
              </div>
            }
          </main>
      )
}