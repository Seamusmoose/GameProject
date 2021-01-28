// let counter = 0;
// let timeLeft = 60;
// function setup() {
//     let timer = select('#timer');
//     timer.html('counter')
    
    
//     function timeIt() {
//        counter++;
//        timer.html(timeLeft - counter); 
//     }

//     setInterval(timeIt, 1000);

// }

;

document.addEventListener('DOMContentLoaded', () => {
    const gameOver = document.querySelector(".game-over")
    const timeLeftDisplay = document.querySelector('#time-left')
    const startBtn = document.querySelector('#start-button')
    let timeLeft = 60
    //countDown() 
        
  

    function countDown() {
    setInterval(function() {
        if (timeLeft <= 0) {     
           clearInterval(timeLeft = 0)  
           remove();
           gameOver.innerHTML = `You have been overwhelmed!`
        }
          timeLeftDisplay.innerHTML = timeLeft
          timeLeft -= 1;  
    }, 1000)
    
 }

 startBtn.addEventListener('click', countDown)
}) 

    //let clockTime = document.querySelector('#timeLeft')



 