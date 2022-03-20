import { NextRequest, NextFetchEvent, NextResponse } from "next/server";


export function middleware(req= NextRequest, ev= NextFetchEvent) {
    const url =  req.nextUrl.clone()
    url.pathname= '/login';
  
    if(req.method ==='GET'){
      return NextResponse.redirect(url)
    }
    return NextResponse.next();
  }