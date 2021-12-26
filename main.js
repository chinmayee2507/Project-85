canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_array = ["img1.jpeg" , "img2.jpg" , "img3.jpg" , "img4.jpg"];
random_number = Math.floor(Math.random()*4);
background_image= img_array[random_number];
console.log("background image : " + background_image);
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;
rover_width = 100;
rover_height = 90;

function add(){
    background_imgTag = new Image();
    background_imgTag.src=background_image;
    background_imgTag.onload = uploadBackground;

    rover_imgTag = new Image();
    rover_imgTag.src=rover_image;
    rover_imgTag.onload = uploadRover;
    
}

function uploadBackground(){

    ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height);
}

function uploadRover(){

    ctx.drawImage(rover_imgTag , rover_x , rover_y , rover_width , rover_height);

}

window.addEventListener("keydown" , myKeyDown);

function myKeyDown(e){
    keyPressed = e.keyCode ;
    console.log(keyPressed);

    if (keyPressed == "38"){
        up();
        console.log("up");
    }
    if (keyPressed == "40"){
        down();
        console.log("down");
    }
    if (keyPressed == "37"){
        left();
        console.log("left");
    }
    if (keyPressed == "39"){
        right();
        console.log("right");
    }
}

function up(){
 if (rover_y >= 0){
     rover_y= rover_y-10 ;
     console.log("when up arrow is pressed x=" + rover_x + ", y=" + rover_y );
     uploadBackground();
     uploadRover();
 }

}

function down(){
    if (rover_y <= 500){
        rover_y= rover_y+10 ;
        console.log("when down arrow is pressed x=" + rover_x + ", y=" + rover_y );
        uploadBackground();
        uploadRover();
    }
   
   }

   function left(){
    if (rover_x >= 0){
        rover_x= rover_x-10 ;
        console.log("when left arrow is pressed x=" + rover_x + ", y=" + rover_y );
        uploadBackground();
        uploadRover();
    }
   
   }

   function right(){
    if (rover_x <= 700){
        rover_x= rover_x+10 ;
        console.log("when right arrow is pressed x=" + rover_x + ", y=" + rover_y );
        uploadBackground();
        uploadRover();
    }
   
   }

