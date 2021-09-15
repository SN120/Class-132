// model name : CocoSsd (Coco Single Shot MultiBox Detection);

img = "";
status = "";

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function preload(){
    img = loadImage('dog_cat.jpg');
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw(){
    image(img, 0, 0, 640, 420);

    stroke('#FF0000');
    noFill();
    text('Dog', 45, 75);
    rect(30, 60, 450, 350);

    stroke('#03fc20');
    noFill();
    text('Cat', 320, 120);
    rect(300, 90, 270, 320); 

    // stroke('#FF0000');
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, result){
    if(error){
        console.log(error);
    }else{
        console.log(result);
    }
}