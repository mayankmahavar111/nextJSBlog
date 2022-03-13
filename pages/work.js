import Styles from '../styles/work.module.css';
import Link from 'next/link';
import { iconSvg } from '../components/api/helper';

function Work(props) {


  const workList = {
    proffesional : [
      {
        "name" : "Tata Health",
        "description" : "Tata Health has a online platform for providing medical facilities. It has multiple modules such as pharma, lab, consultation, etc.",
        "link" : "https://www.tatahealth.com/",
        "contribution": "Design and developed multiple modules such as packages, chat system, admin dashboard. Worked on increasing perfermonce and seo on landing page. Desing and developed internal framework such as security related, firebase for web, mixpanel , moengage.",
        "startYear" : '2019',
        "endYear" : null,
        "techStack" : [
          "react",
          "node",
          "laravel"
        ]
      },
      {
        "name" : "Determinant Studios",        
        "description" : "Determinant Studios is a product based company. It is specialise in building and maintaing custom software.",
        "link" : "https://www.determinantstudios.com/",
        "contribution" : "Designed and developed system such as self driving vehicle using deep reinforcement learning. Build working model with unity and python.",
        "startYear" : "2018",
        "endYear" : "2018 (For 2 months)",
        "techStack" : [
          "unity",
          "python",
          "c#"
        ]
      }
    ],
    personal : [


    ]
  }

  return (
          <main>
            <h1>
              Work
            </h1>

            { workList.proffesional.length > 0 && <div>
              <h2 >Company</h2>
              <br></br>
              <div className={Styles.cardOuterDiv} style={{gridTemplateColumns : `${!props.mobileView ? '50% 50%' : ''}` , gridAutoFlow : `${!props.mobileView ? "column" : "row" }` , gridGap:`${props.mobileView ? '12%' : ''}` }}>
                {workList.proffesional.map((item,key) => {
                  
                  return(
                    <div className={Styles.card} key={key}>
                      <h3> {item.name} </h3>
                      <div>{item.description}</div>
                      <br></br>
                      <div>{item.contribution}</div>
                      <div className={Styles.cardLink}>
                        <div className='floatR'>
                          <a href={item.link}>{!props.mobileView ? 'Visit' : '' } {iconSvg('link')} </a>
                        </div>
                        {item.startYear && <div>
                          {item.startYear} - {item.endYear ? item.endYear : "Till Date"} 
                        </div>}
                          
                      </div>
                    </div>
                  )
                }) }
              </div>
            </div>}
          </main>
      )
}
export default Work;