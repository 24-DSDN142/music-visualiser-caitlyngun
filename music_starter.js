
let img;
let firstRun = true;

let img2;
let firstRun2 = true;

let img3;
let firstRun3 = true;


var buildingsMove = 1;
 var buildingsCopy = 1;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(0,0,0) 
if (firstRun) {
  img = loadImage ("background2.jpg")
  firstRun = false
}

//background
push();
scale(1.7);
image(img, 0, 0);
pop();

//building 1
if (firstRun2) {
  img2 = loadImage ("buildings.png")
  firstRun2 = false
}

push();
scale(2);
tint(255,230)
image(img2,800-buildingsMove,-105);
buildingsMove = buildingsMove +1;
 
if (buildingsMove > 1840) {
  buildingsMove = -15
}
pop();


//building 2
if (firstRun3) {
  img3 = loadImage ("buildingscopy.png")
  firstRun3 = false
}

push();
scale(2);
tint(255,230)
image(img2,1730-buildingsCopy,-105);
buildingsCopy = buildingsCopy +1;
 
if (buildingsCopy > 2670) {
  buildingsCopy = 800
}
pop();


//weird line part at bottom of rectangle
stroke(255,255,255) //white
strokeWeight(3)
line(500,600,600,550)
line (950,600,850,550)
line(600,550,850,550)

//radio outline - darkest colours to brightest
noFill()
strokeWeight(15)
stroke(1, 3, 56)
rect(425,300,600,300)

strokeWeight(12)
stroke(1, 5, 87)
rect(425,300,600,300)

strokeWeight(12)
stroke(0, 6, 125)
rect(425,300,600,300)

strokeWeight(9)
stroke(0, 8, 163)
rect (425,300,600,300)

strokeWeight(6)
stroke(0, 11, 219)
rect (425,300,600,300)

// top radio outline
strokeWeight(3)
stroke(0, 13, 255) //bright blue
noFill()
rect (425,300,600,300)



//big white speakers 
fill(255,255,255)
noStroke()

//left speaker
let leftCircleSize = map(drum,0,100, 50,200) //size increasing with drum
circle(655,400,leftCircleSize)

//right speaker
let rightCircleSize = map(bass,0,100,10,90) //size increasing with bass
circle (845,400,rightCircleSize) 


//inside speakers

//left inside
let insideLeftCirc = map (bass,0,100,5,80) //size increasing with bass
noFill()
stroke(0, 13, 255)
strokeWeight(3)
circle (655,400, insideLeftCirc) 

//right inside
let insideRightCirc = map (drum,0,100,15,60) // size increasing with drum
noFill()
stroke(0, 13, 255)
strokeWeight(3)
circle(845,400,insideRightCirc) 



//inside smaller rectangle
noFill()
stroke(0, 13, 255) //blue
strokeWeight(5)
rect(550,350,350,100) 

//little corner circles
stroke(255)
strokeWeight(2)
circle(440,315,10) //left top
circle(440,585,10) //left bottom
circle(1010,315,10) //right top
circle(1010,585,10) //right bottom


//squares
noStroke()
fill(97, 131, 255) // light blue

//left

let LspinAmount = map (drum, 0, 100, -0,-360) //rotate with drum
push()
translate(655,400)
rotate(LspinAmount)
square(-13,-12,25)
pop()

//right

let RspinAmount = map (bass, 0, 100, 0,360) // rotate the other way with bass
push()
translate(845,400)
rotate(RspinAmount)
square(-10,-10,18)
pop()

// corner x's
strokeWeight(3)
stroke(255)

//left x
line (470,570,480,560)
line (470,560,480,570)

//right x
line (980,570,990,560)
line(980,560,990,570)


//bottom rectangles - from left to right
noStroke()

//rect1
let rect1 = map (other, 0,100,20,90) // all bottom rectangles grow larger with 'other'
fill(0, 13, 255)
rect(470,650,25,rect1)

//rect2
let rect2 = map (other,0,100,10,200)
fill(28, 40, 255)
rect(520,650,25,rect2)

//rect3
let rect3 = map (other,0,100,5,120)
fill(56, 67, 255)
rect(570,650,25,rect3)

//rect4
let rect4 = map (other, 0,100,30,250)
fill(77, 86, 255)
rect(620,650,25,rect4)

//rect5
let rect5 = map (other, 0,100, 10,100)
fill(102, 110, 255)
rect(670,650,25,rect5)

//rect6
let rect6 = map (other, 0,100, 10,340)
fill(121, 128, 252)
rect(720,650,25,rect6)

//rect7
let rect7 = map (other, 0, 100, 10, 300)
fill(144, 150, 252)
rect(770,650,25,rect7)

//rect8
let rect8 = map (other, 0,100,10,120)
fill(168, 173, 255)
rect(820,650,25,rect8)

//rect9
let rect9 = map (other, 0, 100, 5, 200)
fill(192, 195, 252)
rect(870,650,25,rect9)

//rect10
let rect10 = map (other, 0,100,15,160)
fill(210, 212, 252)
rect(920,650,25,rect10)

//rect11
let rect11 = map (other, 0, 100, 5,80)
fill (227, 228, 252)
rect(970,650,25,rect11)



//top rectangles - vocal
// from left to right
// (because it gets larger from the top left corner, make all values negative to change shape downwards.)

//rect1
let rect1A = map (vocal, 0,100,-20,-90) //all top rectangles grow larger with vocal
fill(0, 13, 255)
rect(470,250,25,rect1A)

//rect2
let rect2A = map (vocal,0,100,-10,-200)
fill(28, 40, 255)
rect(520,250,25,rect2A)

// //rect3
let rect3A = map (vocal,0,100,-5,-120)
fill(56, 67, 255)
rect(570,250,25,rect3A)

// //rect4
let rect4A = map (vocal, 0,100,-30,-250)
fill(77, 86, 255)
rect(620,250,25,rect4A)

// //rect5
let rect5A = map (vocal, 0,100, -10,-100)
fill(102, 110, 255)
rect(670,250,25,rect5A)

// //rect6
let rect6A = map (vocal, 0,100, -10,-290)
fill(121, 128, 252)
rect(720,250,25,rect6A)

// //rect7
let rect7A = map (vocal, 0, 100, -10, -280)
fill(144, 150, 252)
rect(770,250,25,rect7A)

// //rect8
let rect8A = map (vocal, 0,100,-10,-120)
fill(168, 173, 255)
rect(820,250,25,rect8A)

// //rect9
let rect9A = map (vocal, 0, 100, -5, -200)
fill(192, 195, 252)
rect(870,250,25,rect9A)

// //rect10
let rect10A = map (vocal, 0,100,-15,-160)
fill(210, 212, 252)
rect(920,250,25,rect10A)

// //rect11
let rect11A = map (vocal, 0, 100, -5,-80)
fill (227, 228, 252)
rect(970,250,25,rect11A)


}
