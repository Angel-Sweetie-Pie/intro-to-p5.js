function preload(){

}

function setup(){
canvas= createCanvas(500,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();

tint_color = "";
}

function draw(){
image(video,0,0.500,500);
tint(tint_color);
}

function apply_filter(){
tint_color= document.getElementById("tint_color").value;

}


function take_snapshot(){
    save("myimage.png");
}