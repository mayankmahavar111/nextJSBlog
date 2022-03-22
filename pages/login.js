import Styles from '../styles/login.module.css'
import { iconSvg } from '../components/api/helper'
import { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
const PopUp = dynamic(() => import('../components/layout/popUp'));
import Link from 'next/link';
import { useRouter } from 'next/router';

import callApi from '../components/api/callApi';

export default  function Login(props){

    const [email, setEmail] =  useState('');
    const [password, setPassword] = useState('');
    const [popupData , setPopupData] = useState({});

    const navigate = useRouter();

    async function validateAndLogin(){
        if(email == '' || password == ''){
            
            setPopupData({
                message : "Please enter email and password",
                statusCode : -400
            })
            return;
        }
        const data = await callApi('/api/authentication/login',{email:email,password : password},'post')
        if (data.statusCode && data.message){
            setPopupData(data);
        }else{
            setPopupData({
                message:"Something went wrong try again later",
                statusCode : data.statusCode ? data.statusCode : -200
            })
        }
    }

    function handleModaleClose(){
        if (popupData.statusCode > 0 && popupData.isLoggedIn){
            navigate.replace('/');
        }
        setPopupData({});
    }

    return(
        <main>
            {<PopUp 
                data = {popupData}
                handleClose={handleModaleClose}
                showModal={Object.keys(popupData).length>0}
            />}
            
            <div className={Styles.loginContainer}>
                <div>
                    <h3>Login</h3>
                </div>
                <div>
                    <input value={email} onInput={(e)=>setEmail(e.target.value)} placeholder='Enter email'></input>
                </div>
                <div>
                    <input type={'password'} value={password} onInput={(e)=>setPassword(e.target.value)} placeholder='Enter Password'></input>
                </div>
                <div>
                    <motion.button 
                    onClick={validateAndLogin}
                    whileTap={{scale:'1.2'}}
                    > 
                        <span>Login</span>  {iconSvg('loginButton')}
                    </motion.button>
                </div>
                <div>
                    <Link href={'/register'}>
                        <a> {iconSvg('register')}  Not Registered Yet ?? </a>
                    </Link>
                </div>
            </div>
        </main>
    )
}