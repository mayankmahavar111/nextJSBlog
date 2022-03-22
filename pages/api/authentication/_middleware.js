import { NextRequest, NextResponse } from "next/server";
// import { sessionOptions } from '../../../components/api/session'
// import { withIronSessionApiRoute } from 'iron-session/next'

// export default withIronSessionApiRoute(middleware , sessionOptions);

export default async function middleware(req= NextRequest, res =NextResponse) {
    const url =  req.nextUrl.clone()
    url.pathname= '/login';

    if(req.method ==='GET'){
      res.redirect(307,url)
    }
    // const user =await req.session.user;
    // console.log("inside middle warre" , user);
    // if (user && user.isLoggedIn){
    //   return NextResponse.status(200).send({
    //     ...user,
    //     ...{
    //       message : "Already logged in",
    //       statusCode : 200
    //     }
    //   })
    // }

    return NextResponse.next();
  }