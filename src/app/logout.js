const logout = document.querySelector('#logout')
import { signOut } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';


import{auth} from './firebase.js'
logout.addEventListener('click', async ()=>{

    await signOut(auth)
    console.log('pa fuera')

})