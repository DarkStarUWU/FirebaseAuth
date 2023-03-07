
import './Firebase/firebase.js'
import {auth} from'./Firebase/firebase.js'
import './Firebase/logout.js'
import './Firebase/signupform.js'

import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';


onAuthStateChanged(auth, async(user)=>{

    console.log(user)

})