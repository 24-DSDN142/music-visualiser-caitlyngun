
// vocal, drum, bass, and other are volumes ranging from 0 to 100

function setup() {
  createCanvas (400,400) ; 
  background(170);
  strokeWeight(4);
}

function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(53,65,21) //black
//textFont('verdana')

textSize(24)

//background
// push();
// scale(0.2);
// image(img, 0, -100);
// pop();

//part at bottom of rect
stroke(255, 23, 151) //pink
strokeWeight(3)
line(500,600,600,550)
line (950,600,850,550)
line(600,550,850,550)

//radio outline - darkest colours to brightest
noFill()
strokeWeight(15)
stroke(36, 6, 23)
rect(425,300,600,300)

strokeWeight(12)
stroke(61, 11, 39)
rect(425,300,600,300)

strokeWeight(12)
stroke(112, 22, 72)
rect(425,300,600,300)

strokeWeight(9)
stroke(150, 30, 96)
rect (425,300,600,300)

strokeWeight(6)
stroke(179, 36, 114)
rect (425,300,600,300)

//brightpink top radio outline
strokeWeight(3)
stroke(255, 23, 151) //bright pink
noFill()
rect (425,300,600,300)



//speakers 
fill(255,255,255)
noStroke()

//left speaker
let leftCircleSize = map(drum,0,100, 50,200)
circle(655,400,leftCircleSize)

//right speaker
let rightCircleSize = map(bass,0,100,10,90)
circle (845,400,rightCircleSize) 


//inside speakers

//left inside
let insideLeftCirc = map (bass,0,100,5,80)
noFill()
stroke(255, 23, 151)
strokeWeight(3)
circle (655,400, insideLeftCirc) 

//right inside
let insideRightCirc = map (drum,0,100,5,60)
noFill()
stroke(255, 23, 151)
strokeWeight(3)
circle(845,400,insideRightCirc) 



//inside rect
noFill()
stroke(255, 23, 151) //pink
strokeWeight(5)
rect(550,350,350,100) 

//little corner circles
strokeWeight(2)
circle(440,315,10) //left top
circle(440,585,10) //left bottom
circle(1010,315,10) //right top
circle(1010,585,10) //right bottom

// corner x's

//left x
line (470,570,480,560)
line (470,560,480,570)

//right x
line (980,570,990,560)
line(980,560,990,570)


//bottom rectangles - from left to right
noStroke()

//rect1
let rect1 = map (other, 0,100,20,90)
fill(196, 10, 113)
rect(470,650,25,rect1)

//rect2
let rect2 = map (other,0,100,10,200)
fill(255, 23, 151)
rect(520,650,25,rect2)

//rect3
let rect3 = map (other,0,100,5,120)
fill(255, 54, 165)
rect(570,650,25,rect3)

//rect4
let rect4 = map (other, 0,100,30,250)
fill(252, 73, 172)
rect(620,650,25,rect4)

//rect5
let rect5 = map (other, 0,100, 10,100)
fill(252, 101, 185)
rect(670,650,25,rect5)

//rect6
let rect6 = map (other, 0,100, 10,60)
fill(255, 117, 194)
rect(720,650,25,rect6)

//rect7
let rect7 = map (other, 0, 100, 10, 25)
fill(252, 131, 199)
rect(770,650,25,rect7)

// voice

//rect8
let rect8 = map (vocal, 0,100,10,120)
fill(255, 156, 211)
rect(820,650,25,rect8)

//rect9
let rect9 = map (vocal, 0, 100, 5, 200)
fill(255, 179, 221)
rect(870,650,25,rect9)

//rect10
let rect10 = map (vocal, 0,100,15,160)
fill(255, 201, 231)
rect(920,650,25,rect10)

//rect11
let rect11 = map (vocal, 0, 100, 5,80)
fill (255, 235, 246)
rect(970,650,25,rect11)






}
