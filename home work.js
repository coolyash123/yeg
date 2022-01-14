var canvas = new fabric.Canvas('mycanvas');
 

 
block_image_width = 30;
block_image_height = 30;
 
var player_object= "";
var block_image_object= "";
 
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
    block_image_object = Img;
 
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_image_object);
 
    });
 

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
}
if(keyPressed == '82')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '71')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '89')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '80')
    {
        right();
        console.log("right");
    }
    if(keyPressed == '66')
    {
        new_image('wall.jpg');
        console.log("w");
    }
    