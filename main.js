video = "";

function setup()
{
  canvas = createCanvas(400, 400);
  canvas.parent('canvas');
  canvas.center();

	poseNet = ml5.poseNet(video, modelLoaded);
}

function preload()
{
  video = createCapture(VIDEO);
  video.hide();
}

function draw()
{
 image(video, 0, 0, 400, 400);
}

function modelLoaded()
{
  console.log("MODEL IS LOADED!");
}