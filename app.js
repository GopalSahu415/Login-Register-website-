const wraper=document.querySelector(".wraper");
const loginLink=document.querySelector(".login-link");
const registrationLink=document.querySelector(".register-link");
registrationLink.addEventListener("click",()=>{
    wraper.classList.add('active');

});
loginLink.addEventListener("click",()=>{
    wraper.classList.remove('active');
});


