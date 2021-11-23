img="";
status="";
objects=[];
function preload()
{
    img = loadImage('turkey from ny.jpg');
    
}
function setup()
{
    canvas=createCanvas(620,420);
    canvas.center();

}
function draw()
{
    image(img,0,0,620,420);
}
function modelLoaded()
{
    console.log("model loaded")
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results)
{
if(error)
{
    console.log(error);

}
else{
    console.log(results);
    objects = results
}
}