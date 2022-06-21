nosex=0;
nosey=0;
difference=0;
leftwristX=0;
rightwristX=0;

function setup(){
    canvas = createCanvas(500,500)
    canvas.position(560,100)

    Video = createCapture(VIDEO)
    Video.size(500,550)

    poseNet = ml5.poseNet(Video,modelloaded)
    poseNet.on('pose',gotPoses)

}

function draw(){
    background("#637187")
    fill("#eb59ba")
    stroke("#eb59ba")
    square(nosex,nosey,difference)
}

function modelloaded(){
    console.log("PoseNet is initialized")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x
        nosey=results[0].pose.nose.y 
        console.log("nosex = " + nosex + " nosey = " + nosey) 
        leftwristX=results[0].pose.leftWrist.x
        rightwristX=results[0].pose.rightWrist.x
        difference = floor(leftwristX - rightwristX)
        console.log(leftwristX,rightwristX)
        document.getElementById("square_side").innerHTML="The width and height of the square are " + difference + "px"


    }
}