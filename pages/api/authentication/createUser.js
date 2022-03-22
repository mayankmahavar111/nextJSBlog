import { firebaseConfig } from "../../../components/api/config";
import { initializeApp } from "firebase/app";
import {getAuth , signInWithEmailAndPassword , createUserWithEmailAndPassword} from 'firebase/auth';
const app =  initializeApp(firebaseConfig);
const auth =  getAuth(app);



async function createFirebaseUser(email,password){
    const resp = await createUserWithEmailAndPassword(auth,email, password).then((respData)=>{
        return respData
    }).catch((err)=>{
        return err;
    })
    if (resp.hasOwnProperty('user')){
        return {
            message : "User Created sucessfully",
            code : 200
        }
    }else{
        return{
            message : resp.message,
            code : -200
        }
    }
}

export default async function handler(req,res){
    const data= await createFirebaseUser(req.body.email, req.body.password)
    res.status(200).json({
        message : data.message,
        statusCode : data.code
    })

}