
import './app/firebase.js'
import {auth} from'./app/firebase.js'
import './app/logout.js'
import './app/signupform.js'
import {loginCheck} from'./app/loginCheck.js'
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';


onAuthStateChanged(auth, async(user)=>{
    loginCheck(user)
    // if (user){

    //     loginCheck(user)
    // }else{
    //     loginCheck(user)
    // }


})