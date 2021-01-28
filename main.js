const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    //console.log(e);
    
cursor.setAttribute("style", "top: "+e.pageY+"px; left: "+e.pageX+"px;")
})

let x;
let y;
let radius = 200;
let elements;

let score = 0;
let test = 'this is a test';

let htmlScore = document.querySelector('#string')

//const labNames = ['test', 'test2', 'test3', 'test4','test5', 'test6', 'test7', 'test8','test9', 'test12', 'test13', 'test14','test15', 'test16', 'test17', 'test18'];


function preload() {
}

function setup() {
createCanvas(2000, 1500)

}

function draw() {  
clear()
textSize(40)

//  text(test, x, y, 2000, 1500)
// x = [ 1, 2,3,4,5]
// x.filter(num => {
//     if (num % 3 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// })

// newX = [1,3]

labNames = labNames.filter(lab => {
    x = random(100, 2000);
    y = random(100, 2000);
    if (lab.clicked) {
        return false;
    } else {
        lab.x = x;
        lab.y = y;
        text(lab.text, x, y, 100, 2000)
        frameRate(1)
        return true;
    }

    });
   
    // elements = labNames.forEach(lab => {
    //     let x = random(100, 2000);
    //     let y = random(100, 2000);
    //     text(lab, x, y, 100, 20000)
    //     frameRate(10)
    //     });



if(frameCount % 100 === 0) {
    //console.log('frame')
    x = random(100, 700)
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
    // if (int(dist(x,y,mouseX,mouseY) < radius)) {
    //     // labNames.splice(word)
    //     // //shownWords.push(labNames)
    //     // console.log('was clicked')
    //     // console.log(shownWords)

    //     score ++;
    // console.log(score)

    // htmlScore.innerHTML = `your score is:  ${score}`;
    }
    


    
    
   
  




