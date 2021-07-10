const { createCanvas, loadImage } = require('canvas')
const fs = require('fs');
const width = 1500;
const height = 500;



const createImage = async () => {
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')
    const image1 = await loadImage('profile-image-one.jpeg');
    const image2 = await loadImage('profile-image-two.jpeg');
    const image3 = await loadImage('profile-image-three.jpeg');

    ctx.fillStyle = "#34aded";

    ctx.fillRect(0, 0, width, height)
    
    ctx.fillStyle = "#f7f7f7";
    
    ctx.font = "bold 80px Arial";
    ctx.fillText("Hi I'm James", 500, 140);

    ctx.font = "40px Arial";
    ctx.fillText("Thanks to my latest followers", 490, 210);

    ctx.font = "25px Arial";

    ctx.fillText("@aimeetacchi", 470, 400);
    ctx.fillText("@stevediaconou", 662, 400);
    ctx.fillText("@nerdswire", 885, 400);

    ctx.font = "bold 25px Arial";
    ctx.fillStyle = "#d1eeff";

    ctx.fillText("created by @JamesARob1 ", 1150, 50);


    
    ctx.drawImage(image1, 490, 250, 120, 120)
    ctx.drawImage(image2, 690, 250, 120, 120)
    ctx.drawImage(image3, 890, 250, 120, 120)

    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync('./image.png', buffer)
}

createImage();

