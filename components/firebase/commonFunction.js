import { firebaseConfig } from "../api/config";
import { initializeApp } from "firebase/app";
import {getAuth , signInWithEmailAndPassword} from 'firebase/auth';


export async function firebaseLogin(email,password){
    const app =  initializeApp(firebaseConfig);
    const auth =  getAuth(app);
    await signInWithEmailAndPassword(auth, email,password).then((respData)=>{
        const succes = JSON.stringify(respData);
    }).catch((err)=>{
        const error =  JSON.stringify( err);
    })
    return
}