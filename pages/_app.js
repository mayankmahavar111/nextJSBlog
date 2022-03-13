import '../styles/globals.css'
import Header from '../components/layout/header'
import Navbar from '../components/layout/navbar'
import { useEffect, useState } from 'react';
import Loading from '../components/layout/loading';


function MyApp({ Component, pageProps }) {

  const navItem =[
    {
      url:'/',
      name : 'Home'
    },
    {
      url:'/work',
      name : 'Work'
    },
    {
      url:'/contact',
      name : 'Contact'
    }
  ];

  const mobileViewWidth = 800;
  const [mainHeight ,setMainHeight] = useState('26');
  const [isMobileView , setMobileView] =useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    if (typeof window){
      if (window.innerHeight*0.5/16 != mainHeight)
        setMainHeight(window.innerHeight*0.5/16);
      if (isMobileView == false && window.innerWidth < mobileViewWidth){
        setMobileView(true);
      }
      if (loading == true)
        setLoading(false);
    }
  },[])
  return (
    <>
      {loading ? <Loading /> : 
        <div>
        <Header />
        <Navbar 
          navItems =  {navItem} 
          mobileView = {isMobileView}
          />
        <div style={{height:`${mainHeight}rem`}}>
          <Component {...{...pageProps , ...{
            mobileView : isMobileView
          }}} />
        </div>
      </div>
      }
    </>
    
  )
}

export default MyApp
