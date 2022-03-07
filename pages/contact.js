
import Link from "next/link"
import { iconSvg } from "../components/api/helper"
import Styles from '../styles/contact.module.css'

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
            <div className={`displayFlex ${Styles.linkOuterDiv}`}> 
              {contactList.map((item,key) => {
                return <div className={`mAuto ${Styles.linkDiv}`} key={key}>
                      <Link href={item.link}>
                        <a>{iconSvg(item.name.toLocaleLowerCase())} {props.mobileView == false? item.name : ''}</a>
                      </Link>
                  </div>
              })}
            </div>
          </main>
      )
}