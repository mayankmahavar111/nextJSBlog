import '../styles/globals.css'
import Header from '../components/layout/header'
import Navbar from '../components/layout/navbar'


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
  return (
    <div >
      <Header />
      <div className='container' >
        <Navbar navItems =  {navItem} />
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
