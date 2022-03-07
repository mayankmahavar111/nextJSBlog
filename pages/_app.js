import '../styles/globals.css'
import Header from '../components/layout/header'
import Navbar from '../components/layout/navbar'
import { useEffect, useState } from 'react';


function MyApp({ Component, pageProps }) {

  const navItem =[
    {
      url:'/',
      name : 'Home'
    },
    {
      url:'/projects',
      name : 'Projects'
    },
    {
      url:'/contact',
      name : 'Contact'
    }
  ];

  const [mainHeight ,setMainHeight] = useState('26');

  useEffect(()=>{
    if (typeof window && window.innerHeight*0.5/16 != mainHeight){
      setMainHeight(window.innerHeight*0.5/16)
    }
  },[])

  return (
    <div>
      <Header />
      <Navbar navItems =  {navItem} />
      <div style={{height:`${mainHeight}rem`}}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
