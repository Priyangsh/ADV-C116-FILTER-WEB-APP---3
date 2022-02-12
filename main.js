function preload(){

}

function setup(){
    canvas= createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    
}

function draw(){
image(video, 0, 0, 400, 400);    
}

function take_snapshot(){
save("my_photo.png");
}

function modelLoaded(){
    console.log("model is loaded");
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
        console.log("in_gotPose")
        console.log("nosex= "+results[0].pose.nose.x);
        console.log("nosey= "+results[0].pose.nose.y);
    }
}

