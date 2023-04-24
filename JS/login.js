import {usuarios} from "./user.js";
console.log(usuarios)
const login = document.querySelector('.btnlogin')
const user = document.getElementById('username')
const pass = document.getElementById('password')
const password = document.getElementById('password')

const ver=document.querySelector('.bi')
console.log(ver)

ver.addEventListener('mousenter',()=>{
    if(password.type=='text'){
        password.type='password'
    }else{
        password.type='text'
    }
})

login.addEventListener('click',(evento)=>{
    let existe=false
    evento.preventDefault()
    usuarios.forEach((item)=>{
        if(user.value==item.username){
            if(pass.value==item.userpass){
                existe=true
            }
        }
    })
    if (existe==true){
        location.assign("../HTML/principal.html")
    }else{
        document.querySelector('.error').style.opacity=1
        setTimeout(function(){
            document.querySelector('.error').style.opacity=0
        },3000)
    }
})
