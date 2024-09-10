
// vocal, drum, bass, and other are volumes ranging from 0 to 100

function setup() {
  createCanvas (400,400) ; 
  background(170);
  strokeWeight(4);
}

function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(0,0,0) //black
//textFont('verdana')

textSize(24)



//part at bottom of rect
stroke(255, 23, 151) //pink
strokeWeight(3)
line(500,600,600,550)
line (950,600,850,550)
line(600,550,850,550)

//radio outline - darkest colours to brightest
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


}
