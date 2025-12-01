const burgerLogo = document.getElementById("logo-burger");
const burger = document.getElementById("burger");



burgerLogo.addEventListener('click',function() {
  burger.classList.toggle("open")
  
  console.log('hello')
})
