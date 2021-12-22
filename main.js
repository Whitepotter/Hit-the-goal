canvas = new fabric.Canvas("myCanvas");

// Create canvas variable
score = 0;
//Set initial positions for ball and hole images.
ball_x = 0;
ball_y = 0;
hole_y = 400;
hole_x = 800;

block_image_height = 10;
block_image_width = 10;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img){
        hole_object = Img;
        hole_object.scaleToWidth(50);
        hole_object.scaleToHeight(50);
        hole_object.set({
            top : hole_y,
            left : hole_x
        });
        canvas.add(hole_object);
	});
 new_image();

}
load_img();

function new_image(){
	fabric.Image.fromURL("ball.png",function(Img){
        ball_object = Img;
        ball_object.scaleToWidth(50);
        ball_object.scaleToHeight(50);
        ball_object.set({
            top : ball_y,
            left : ball_x
        });
        canvas.add(ball_object);
        
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if ((ball_x == hole_x) && (ball_y == hole_y)){
		canvas.remove(ball_object);
		document.getElementById("hd3").innerHTML = "You have hit the goal!! Congrats";
		score = score + 1;
		document.getElementById("score").innerHTML = "Score: " + score;
		document.getElementById("myCanvas").style.borderColor = "red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
}
	function up()
	{
		if (ball_y >= 0){
        ball_y =ball_y - block_image_height;
        console.log(block_image_height);
        console.log("up pressed x = " + ball_x + " y = " + ball_y);
        canvas.remove(ball_object);
        new_image();
    }
	}

	function down()
	{
		 if (ball_y <= 750){
			ball_y =ball_y + block_image_height;
			console.log(block_image_height);
			console.log("down pressed x = " + ball_x + " y = " + ball_y);
			canvas.remove(ball_object);
			new_image();
	}
} 

	function left()
	{
		if(ball_x >=5)
		{
			ball_x =ball_x - block_image_width;
			console.log(block_image_width);
			console.log("left pressed x = " + ball_x + " y = " + ball_y);
			canvas.remove(ball_object);
			new_image();
		}
	}

	function right(){
		if(ball_x <=550)
		{
			ball_x =ball_x +  block_image_width;
			console.log(block_image_width);
			console.log("right pressed x = " + ball_x + " y = " + ball_y);
			canvas.remove(ball_object);
			new_image();
		}
	}
