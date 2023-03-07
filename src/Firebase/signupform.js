
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import { auth } from './firebase.js'

const signupform = document.querySelector('#signup-form')


signupform.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const Email = document.querySelector('#signup-email').value;
    const Password = document.querySelector('#signup-password').value;




    try{
        const userCredential = await createUserWithEmailAndPassword(auth, Email, Password)
        console.log(userCredential)
        
        const signupmodal = document.querySelector('#SignUpModel')
        const hidemodal = bootstrap.Modal.getInstance(signupmodal)
        hidemodal.hide()


    }catch(error){
        console.log(error)
        switch(error.code){
            case 'auth/invalid-email':
                alert('Email no valido')
                break
            case 'auth/weak-password':
                alert('La contrasena debe tener mas de 6 caracteres')
                break
            case 'auth/email-already-in-use':
                alert('Email Ya registrado')
                break
        }
    }   
    
    console.log(Password)
    console.log(Email)
    console.log('GAY XIXICO')

})