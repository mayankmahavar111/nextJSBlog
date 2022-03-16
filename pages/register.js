import Styles from '../styles/register.module.css';
import {motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { iconSvg } from '../components/api/helper';
import { useState } from 'react';
const PopUp =  dynamic(()=> import('../components//layout/popUp'));
import callApi from '../components/api/callApi';

export default function Register(props){


    const [email , setEmail] = useState('');
    const [name, setName] =  useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [popupData , setPopupData] = useState({});

    async function validatForm(){
        if (email == '' || name =='' || password == '' || rePassword == ''){
            setPopupData({
                message : 'inside register erro',
                statusCode : -400
            })
            return
        }
        const data= await callApi(
            '/api/authentication/createUser',
            {
                email :email,
                name:name,
                password : password,
                rePassword : rePassword
            },
            'post'
        )
    }

    return(
    <main>
        <PopUp 
            data = {popupData}
            handleClose= {()=>setPopupData({})}
            showModal = {Object.keys(popupData).length>0}
        />
        <div className={Styles.registerOuterDiv}>
            <div> <h3>Register</h3> </div>
            <div>
                <input  onInput={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email' ></input>
            </div>
            <div>
                <input  onInput={(e)=>{setName(e.target.value)}}  placeholder='Name' ></input>
            </div>
            <div>
                <input  onInput={(e)=>{setPassword(e.target.value)}}  type={'password'} placeholder='Enter Password' ></input>
            </div>
            <div>
                <input  onInput={(e)=>{setRePassword(e.target.value)}}  type={'password'} placeholder='Re-Enter Password' ></input>
            </div>
            <div>
                <motion.div
                    whileTap={{scale:1.2}}
                >
                    <button onClick={validatForm}> {iconSvg('register')} Register</button>
                </motion.div>
            </div>
        </div>
    </main>
    )
}