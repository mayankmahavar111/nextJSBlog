import type { IronSessionOptions } from 'iron-session'
import type { User } from '../../pages/api/authentication/login'

export const sessionOptions: IronSessionOptions = {
  password: process.env.NEXT_PUBLIC_SESSION_COOKIE_PASSWORD as string,
  cookieName: 'mayankmahavarCookie',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}

declare module 'iron-session' {
  interface IronSessionData {
    user?: User
  }
}
