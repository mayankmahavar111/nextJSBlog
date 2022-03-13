import { iconSvg } from "../components/api/helper"
import Styles from '../styles/contact.module.css'
import { motion } from "framer-motion"
import { listContainerVariant , listItemVariant} from "../components/motion/listMotion"

export default function Contact(props) {

    const contactList = [
      {
        'name' : 'Linkedin',
        'link' : 'https://www.linkedin.com/in/mayank-mahavar/'
      },
      {
        'name' : 'Github',
        'link' : 'https://github.com/mayankmahavar111'
      },
      {
        'name' : 'Gmail',
        'link' : 'mailto:mayankmahavar111@gmail.com'
      },  
      {
        'name' : 'Meta',
        'link' : 'https://www.facebook.com/people/Mayank-Mahavar/100004140257021/'
      },
      {
        'name' : 'Instagram',
        'link' : 'https://www.instagram.com/mayankmahavar/'
      },
      {
        'name' : 'Telegram',
        'link' : 'https://t.me/mayankmahavar'
      },
      {
        'name' : 'Whatsapp',
        'link' : 'https://wa.me/+919643523146'
      },
    ]

    return (
          <main>
            <h1>
              Contact Info
            </h1>
            <div>
              Contact Form coming soon ... 
            </div>
            {/* <div className={`displayFlex ${Styles.linkOuterDiv}`}>  */}
            <motion.div
              initial = "hidden"
              animate = "show"
              variants={listContainerVariant}
              className={`displayFlex ${Styles.linkOuterDiv}`}
            >
              {contactList.map((item,key) => {

                  return <motion.div
                      variants={listItemVariant}
                      className={`mAuto ${Styles.linkDiv}`}
                      key = {key}
                    > 
                        <a target={'_blank'} href={item.link}>{iconSvg(item.name.toLocaleLowerCase())} {props.mobileView == false? item.name : ''}</a>

                    </motion.div>
                })}

            </motion.div>

            {/* </div> */}
          </main>
      )
}