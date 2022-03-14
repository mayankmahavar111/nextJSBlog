import '../styles/globals.css'
import { useEffect, useState } from 'react';
import Loading from '../components/layout/loading';
import { gloablUrl ,mobileViewWidth} from '../components/api/helper';
import { Suspense } from 'react/cjs/react.production.min';

import dynamic from 'next/dynamic';
const Header = dynamic(()=> import('../components/layout/header'))
const Navbar = dynamic(()=>import('../components/layout/navbar'))

function MyApp({ Component, pageProps }) {
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
          navItems =  {gloablUrl} 
          mobileView = {isMobileView}
          />
        <Suspense fallback={<Loading />}>
          <div style={{height:`${mainHeight}rem`}}>
            <Component {...{...pageProps , ...{
              mobileView : isMobileView
            }}} />
          </div>
        </Suspense>
      </div>
      }
    </>
    
  )
}

export default MyApp
