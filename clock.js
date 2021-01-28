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

let timeLeft = 60;
const gameOver = document.querySelector(".game-over")
const timeLeftDisplay = document.querySelector('#time-left')
document.addEventListener('DOMContentLoaded', () => {
   countDown() 
        
    })
    
    function countDown() {
    let countDown = setInterval(function() {
        if(timeLeft <= 0) {
            timeLeft = 0
           clearInterval(countDown)  
           remove()
          gameOver.innerHTML = "You were overwhelmed!"
           
           
           
           

           
            
            
           
        }
        timeLeftDisplay.innerHTML = timeLeft
        timeLeft -= 1;
    }, 1000)
    
    }

    let clockTime = document.querySelector('#timeLeft')



 