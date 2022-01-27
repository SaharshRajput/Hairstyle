noseX="";
noseY="";
function preload(){
clown_nose= loadImage("hairstyle.jfif");
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function draw()
{
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,120,30);
}
function take_snapshot()
{
    save("Realtime Filter Image");
}
function modelLoaded()
{
console.log("PoseNet is Initialized");
}
function gotPoses(results)
{
    if(results.length>0)
    {
console.log(results);
noseX= results[0].pose.leftEye.x-80;  
noseY= results[0].pose.leftEye.y-80;
console.log("Nose x="+noseX);
console.log("Nose y="+noseY);
    }
}