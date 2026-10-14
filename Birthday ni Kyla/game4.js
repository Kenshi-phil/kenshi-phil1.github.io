const answer1 = document.querySelector("#answer1");
const submitButton1 = document.querySelector("#submit-btn1")
const continueButton1 = document.querySelector("#continue-btn1")

submitButton1.addEventListener("click", ()=>{
  if (answer1.value.trim().toLowerCase() === "4511") {
    continueButton1.hidden = false;
  } else{continueButton1.hidden = true;
  alert("Wrong answer!");
  }
})

