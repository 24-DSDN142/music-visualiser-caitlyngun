
// vocal, drum, bass, and other are volumes ranging from 0 to 100
// function setup () {
//    createcanvas (500,500);
// }
// function draw() {
// background (0)

// draw_one_frame()
// }

function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(9, 12, 46) //darkblue
//textFont('verdana')
// rectMode(center)
textSize(24)



// let y = 100; 


//  for (let i = 1; i <= 6; i ++)
//   {
//  fill (0)
//   let loopyY = y  * i;
//   fill(255)
//   ellipse (400, loopyY, 100) 
//   }


stroke(255, 23, 151) //pink
strokeWeight(8)
line(100,448,150,400)
line (450,448,400,400)
line(150,400,400,400)

//radio outline
strokeWeight(4)
stroke(255, 23, 151) //bright pink
noFill()
rect (75,250,400,200)

//speakers 
fill(64, 104, 247)
stroke(64, 104, 247) //blue
strokeWeight(7)
circle(180,350,140) //left
circle (370,350,75) //right

//inside speaker
noFill()
stroke(200, 89, 255) //purple
strokeWeight(4)
circle(180,350,100) //left
circle(370,350,45)



}
