let disp=document.getElementById('blank');

async function getRandomUser(){
    const response =await fetch('https://randomuser.me/api/');
    const data =await response.json();
    const user =data.results[0];
display(user);
}
function display(user){
    let fname=document.getElementById('fname')
    fname.innerText=`${user.name.first+" "+ user.name.last}`

    let img=document.getElementById('imag')
    img.setAttribute('src',`${user.picture.large}`)

    let age=document.getElementById('age')
    age.addEventListener('click',()=>{
        disp.innerHTML=`${user.dob.age}`
    })

    let email=document.getElementById('email')
    email.addEventListener('click',()=>{
        disp.innerText=`${user.email}`
    })

    let phone=document.getElementById('phone')
    phone.addEventListener('click',()=>{
        disp.innerText=`${user.phone}`
    })
}
getRandomUser();
let newu=document.getElementById('getUser')
    newu.addEventListener('click',()=>{
        getRandomUser()
        disp.innerText="";
    })