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
}

function modelloaded(){
    console.log("PoseNet is initialized")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}