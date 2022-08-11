leftwristx=0;
rightwristx=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,model_loaded);
    poseNet.on('pose',gotPoses);
}

function model_loaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log("Left Wrist X ="+leftwristx+",Right Wrist X ="+rightwristx+",Difference ="+difference);
    }
}

function draw(){
    background("#b51d1d");
    fill("orange");
    text("Words",50,400);
    textSize(difference);
    document.getElementById("font_size").innerHTML="Font size of the text is "+difference+"px";
}