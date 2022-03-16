import { firebaseConfig } from "../api/config";
import { initializeApp } from "firebase/app";
import {getAuth , signInWithEmailAndPassword} from 'firebase/auth';


export async function firebaseLogin(email,password){
    const app =  initializeApp(firebaseConfig);
    const auth =  getAuth(app);
    await signInWithEmailAndPassword(auth, email,password).then((respData)=>{
        const succes = JSON.stringify(respData);
        console.log("inside firebase login",succes);
    }).catch((err)=>{
        const error =  JSON.stringify( err);
        console.log("inside firebase login error", error);
    })
    return
}