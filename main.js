video = "";

rightWristY = 0;
rightWristX = 0;
scoreRightWrist = 0;

function setup()
{
  canvas = createCanvas(400, 400);
  canvas.parent('canvas');
  canvas.center();

	poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function preload()
{
  video = createCapture(VIDEO);
  video.hide();
}

function draw()
{
 image(video, 0, 0, 400, 400);

 
 if(scoreRightWrist > 0.2)
 {
   fill("red");
   stroke("red");
   circle(rightWristX, rightWristY, 30);
 }
}

function modelLoaded()
{
  console.log("MODEL IS LOADED!");
}


function gotPoses(results)
{
  if(results.length > 0)
  {

    rightWristY = results[0].pose.rightWrist.y;
    rightWristX = results[0].pose.rightWrist.x;
    scoreRightWrist =  results[0].pose.keypoints[10].score;
    console.log(scoreRightWrist);
  }
}
