
const msgButton = document.querySelectorAll(".message-btn");
msgButton.forEach(button =>{button.addEventListener("click",()=>{
const msgContent = button.nextElementSibling;
button.classList.toggle("clicked");
msgContent.classList.toggle("open");
})})

const creepyHover = document.querySelector(".start-btn");
const creepySound = document.querySelector("#creepy-sound");
const bgColor = document.querySelector(".inteface-container")

creepyHover.addEventListener("mouseenter", function(){
  creepySound.currentTime=0;
  creepySound.play();
  bgColor.classList.toggle("hover");

});


