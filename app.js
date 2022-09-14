var text = ["Electronics Undergrad", "Web Developer", "Football Fan"];
var counter = 0;
var elem = document.getElementById("change1");
window.setInterval(function () {
  // this will execute on every 5 seconds
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}, 3000);

let circularProgress1 = document.querySelector(".circular-progress1"),
progressValue1 = document.querySelector(".progress-value1");

let progressStartValue1 = 0,    
progressEndValue1 = 90,    
speed1 = 30;

let progress1 = setInterval(() => {
progressStartValue1++;

progressValue1.textContent = `${progressStartValue1}%`
circularProgress1.style.background = `conic-gradient(#ffd744 ${progressStartValue1 * 3.6}deg, #ededed 0deg)`

if(progressStartValue1 == progressEndValue1){
    clearInterval(progress1);
}    
}, speed1);

let circularProgress2 = document.querySelector(".circular-progress2"),
progressValue2 = document.querySelector(".progress-value2");

let progressStartValue2 = 0,    
progressEndValue2 = 90,    
speed2 = 30;

let progress2 = setInterval(() => {
progressStartValue2++;

progressValue2.textContent = `${progressStartValue2}%`
circularProgress2.style.background = `conic-gradient(#ffd744 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`

if(progressStartValue2 == progressEndValue2){
    clearInterval(progress2);
}    
}, speed2);

let circularProgress3 = document.querySelector(".circular-progress3"),
progressValue3 = document.querySelector(".progress-value3");

let progressStartValue3 = 0,    
progressEndValue3 = 80,    
speed3 = 30;

let progress3 = setInterval(() => {
progressStartValue3++;

progressValue3.textContent = `${progressStartValue3}%`
circularProgress3.style.background = `conic-gradient(#ffd744 ${progressStartValue3 * 3.6}deg, #ededed 0deg)`

if(progressStartValue3 == progressEndValue3){
    clearInterval(progress3);
}    
}, speed3);

let circularProgress4 = document.querySelector(".circular-progress4"),
progressValue4 = document.querySelector(".progress-value4");

let progressStartValue4 = 0,    
progressEndValue4 = 50,    
speed4 = 30;

let progress4 = setInterval(() => {
progressStartValue4++;

progressValue4.textContent = `${progressStartValue4}%`
circularProgress4.style.background = `conic-gradient(#ffd744 ${progressStartValue4 * 3.6}deg, #ededed 0deg)`

if(progressStartValue4 == progressEndValue4){
    clearInterval(progress4);
}    
}, speed4);

let circularProgress5 = document.querySelector(".circular-progress5"),
progressValue5 = document.querySelector(".progress-value5");

let progressStartValue5 = 0,    
progressEndValue5 = 60,    
speed5 = 30;

let progress5 = setInterval(() => {
progressStartValue5++;

progressValue5.textContent = `${progressStartValue5}%`
circularProgress5.style.background = `conic-gradient(#ffd744 ${progressStartValue5 * 3.6}deg, #ededed 0deg)`

if(progressStartValue5 == progressEndValue5){
    clearInterval(progress5);
}    
}, speed5);

let circularProgress6 = document.querySelector(".circular-progress6"),
progressValue6 = document.querySelector(".progress-value6");

let progressStartValue6 = 0,    
progressEndValue6 = 60,    
speed6 = 30;

let progress6 = setInterval(() => {
progressStartValue6++;

progressValue6.textContent = `${progressStartValue6}%`
circularProgress6.style.background = `conic-gradient(#ffd744 ${progressStartValue6 * 3.6}deg, #ededed 0deg)`

if(progressStartValue6 == progressEndValue6){
    clearInterval(progress6);
}    
}, speed6);

