const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    //console.log(e);
    
cursor.setAttribute("style", "top: "+e.pageY+"px; left: "+e.pageX+"px;")
})

let timer = 5;
let x;
let y;
let radius = 100;
let elements;

let score = 0;

let htmlScore = document.querySelector('#score')





function preload() {
}

function setup() {
createCanvas(1000, 1000)
}

function draw() {    
clear()

textSize(20)


labNames = labNames.filter(lab => {
    x = random(100, 600);
    y = random(100, 600);
    if (lab.clicked) {
        return false;
    } else {
        lab.x = x;
        lab.y = y;
        text(lab.text, x, y, 100, 600)
        frameRate(1)
        return true;
    }

    });

if(frameCount % 100 === 0) {
    //console.log('frame')
    x = random(100, 600)
    y = random(100, 600)
   }
 }

 

 function mousePressed() {
     labNames.forEach(lab => {
         let distance = dist(lab.x, lab.y, mouseX, mouseY);
         if (distance < radius) {
             lab.clicked = true;
             score ++;
             htmlScore.innerHTML = `your score is:  ${score}`;
        
  
             
             
             
         }
     })

}
    


    
    





