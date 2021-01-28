const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    //console.log(e);
    
cursor.setAttribute("style", "top: "+e.pageY+"px; left: "+e.pageX+"px;")
})

let timer = 5;
let x;
let y;
let radius = 25;
let elements;

let score = 0;
let htmlScore = document.querySelector('#score')
let removeTime = document.querySelector('h3').innerHTML.remove;

function setup() {
createCanvas(1000, 600)
}

function draw() {    
clear()

textSize(15)


labNames = labNames.filter(lab => {
    x = random(100, 1000);
    y = random(100, 1000);
    if (lab.clicked) {
        return false;
    } else {
        lab.x = x;
        lab.y = y;
        text(lab.text, x, y, 100, 1000)
        frameRate(2)
        return true;
    }

    });

if(frameCount % 100 === 0) {
    //console.log('frame')
    x = random(100, 1000)
    y = random(100, 1000)
   }
 }

 

 function mousePressed() {
     labNames.forEach(lab => {
         let distance = dist(lab.x, lab.y, mouseX, mouseY);
         if (distance < radius) {
             lab.clicked = true;
             score ++;
             if (score > 20) {
                htmlScore.innerHTML = `you Win!`;
                remove();
                
                 
             } else {
                htmlScore.innerHTML = `your score is: ${score}`;
             }
             
             
        
  
             
             
            
         }
     })

}
   


    
    





