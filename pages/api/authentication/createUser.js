import { firebaseConfig } from "../../../components/api/config";
import { initializeApp } from "firebase/app";
import {getAuth , signInWithEmailAndPassword , createUserWithEmailAndPassword} from 'firebase/auth';
const app =  initializeApp(firebaseConfig);
const auth =  getAuth(app);

async function firebaseLogin(email,password){
    
    await signInWithEmailAndPassword(auth, email,password).then((respData)=>{
        const succes = JSON.stringify(respData);
        return succes;
    }).catch((err)=>{
        const error =  JSON.stringify( err);
        return error;
    })
    return
}

async function createFirebaseUser(email,password){
    const resp = await createUserWithEmailAndPassword(auth,email, password).then((respData)=>{
        return JSON.parse(respData)
    }).catch((err)=>{
        return err.code;
    })
    return resp;
}

export default async function handler(req,res){
    if (req.method == 'POST'){
        const data= await createFirebaseUser(req.body.email, req.body.password)
        res.status(200).json({msg:'got it' , firbase:data })
    }else{
        
    res.status(200).json({msg:'got it' ,  })
    }

}