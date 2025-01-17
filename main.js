import './style.css'
import logo from '/SDC Logo.png'

// query selector

const title = document.querySelector('title')
title.innerText = 'SDC - Database'
const header = document.querySelector('header')

/**htmL*/

header.innerHTML = `  <div class="contact-details">
        <a href="tel:+8801728171519"><i class="fa-solid fa-phone"></i></a>
        <a href="mailto:sdc.contact24@gmail.com"><i class="fa-solid fa-envelope"></i></a>
        <a href="http://www.oursdc.com"><i class="fa-solid fa-globe"></i></a>
    </div>
    <div class="logo">
        <img src="${logo}" onclick="location.href = 'https://sdc-network.github.io/sdc-network/'" alt="Not responding">
        <p>সাপ্লাই এন্ড ডিস্ট্রিবিউশন কর্পোরেশন </p>
    </div>
    <div class="social-icon">
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://wa.me/01728171519"><i class="fa-brands fa-whatsapp"></i></a>
        <a href="https://t.me/Rofikul5858"><i class="fa-brands fa-telegram"></i></a>
    </div>`

const personPageTitle = document.querySelector('.person-page-title') 
personPageTitle.innerHTML = `
               <h2 class="person-title">প্রতিনিধি সমূহঃ-</h2>
` 
document.querySelector('.person-title').style.textAlign = 'center'
const allLi = document.querySelectorAll('.modal')
const x = document.querySelectorAll('.fa-x')
const modal = document.querySelector('#modal')

allLi.forEach(function(li){

   li.addEventListener('click', function(){

      modal.classList.add('modal-open')
   })
})



x.forEach(function(x){
   x.addEventListener('click', function(){
      modal.classList.remove('modal-open')
   });
})