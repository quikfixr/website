import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAfCXZ4aGoCTKwN9BDgM0NZhsSf2gWl2Po',
  authDomain: 'quikfixrweb.firebaseapp.com',
  projectId: 'quikfixrweb',
  storageBucket: 'quikfixrweb.firebasestorage.app',
  messagingSenderId: '949380775489',
  appId: '1:949380775489:web:b828225d2ccec14ef690c0',
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

export const auth = getAuth(app)
auth.useDeviceLanguage()

export default app


