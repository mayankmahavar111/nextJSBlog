import Styles from '../styles/register.module.css';
import {motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { iconSvg } from '../components/api/helper';
import { useState } from 'react';
const PopUp =  dynamic(()=> import('../components//layout/popUp'));
import callApi from '../components/api/callApi';
import { useRouter } from 'next/router';

export default function Register(props){


    const [email , setEmail] = useState('');
    const [name, setName] =  useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [popupData , setPopupData] = useState({});

    const navigate = useRouter();

    async function validatForm(){
        if (email == ''|| password == '' || rePassword == ''){
            setPopupData({
                message : 'Please enter all the required Field',
                statusCode : -400
            })
            return
        }
        if (password != rePassword){
            setPopupData({
                message: 'Password Dosen`t match',
                statusCode : -400
            })
            return
        }
        const data= await callApi(
            '/api/authentication/createUser',
            {
                email :email,
                // name:name,
                password : password,
                rePassword : rePassword
            },
            'post'
        );
        setPopupData(data);
    }

    function popUpCloseHandle (){
        if(popupData.statusCode>0 ){
            navigate.replace('/')
        }else{
            setPopupData({})
        }
    }

    return(
    <main>
        <PopUp 
            data = {popupData}
            handleClose= {()=>popUpCloseHandle()}
            showModal = {Object.keys(popupData).length>0}
        />
        <div className={Styles.registerOuterDiv}>
            <div> <h3>Register</h3> </div>
            <div>
                <input  onInput={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email' ></input>
            </div>
            <div>
                {/* <input  onInput={(e)=>{setName(e.target.value)}}  placeholder='Name' ></input> */}
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