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

let timeLeft = 10;
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
        //    if (score == 20) {
        //     gameOver.innerHTML = "you Win!"
        // }  
           remove()
          gameOver.innerHTML = "The Labs Always Win!"
           
           
           
           

           
            
            
           
        }
        timeLeftDisplay.innerHTML = timeLeft
        timeLeft -= 1;
    }, 1000)
    
    }

    let clockTime = document.querySelector('#timeLeft')



 