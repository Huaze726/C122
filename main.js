function preload(){}


function setup(){
    Canvas = createCanvas(640, 480);
    Canvas.position(110, 250);
    Video = createCapture(VIDEO);
    Video.hide();

    tint_colour = "";
}


function draw(){
    image(Video, 0, 0, 640, 480);
    tint(tint_colour);
}

function take_snapshot(){
    save('image.png');
}

function filter_tint(){
    tint_colour = document.getElementById("name").value;
}