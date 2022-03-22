import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../../components/api/session'
import { NextApiRequest, NextApiResponse } from 'next'
import  { firebaseConfig } from "../../../components/api/config"
import  { initializeApp } from "firebase/app"
import {getAuth , signInWithEmailAndPassword} from 'firebase/auth'
const app =  initializeApp(firebaseConfig)
const auth =  getAuth(app)

export type User = {
  isLoggedIn: boolean
  loginName: string
  loginData : string
}

export default withIronSessionApiRoute(userRoute, sessionOptions)

async function userRoute(req: NextApiRequest, res: NextApiResponse) {
  if (req.session.user && req.session.user.isLoggedIn) {
    const userData =  req.session.user
    res.send({
      ...userData,
      ...{
        message : "Logged in Successfully",
        statusCode : 200
      }
    })
  } else {
    const respData = await firebaseLogin(req.body.email , req.body.password);
    if (respData.hasOwnProperty('user')){
      const userData=  {
        isLoggedIn: true,
        loginName: respData.user.email,
        loginData : JSON.stringify(respData.user)
      } as User ;

      req.session.user =  userData;
      await req.session.save();
      res.send({
        ...userData,
        ...{
          message : "Logged in Successfully",
          statusCode : 200
        }
      })
      return
    }
    res.send({
      isLoggedIn: false,
      loginName: '',
      loginData : ''
    })
  }
}

async function firebaseLogin(email: string,password: string){
    
  const resp = await signInWithEmailAndPassword(auth, email,password).then((respData : any)=>{
      return respData;
  }).catch((err :any)=>{
      return err;
  })

  return resp;
}
