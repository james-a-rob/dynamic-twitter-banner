const { createCanvas, loadImage, registerFont } = require('canvas')
const fs = require('fs');
const width = 1500;
const height = 500;
const profileImageWidth = 120;
const profileImageHeight = 120;
class ImageCreator{
    async createImage(user1, user2, user3){
        registerFont('fonts/Anton/Anton-Regular.ttf', { family: 'Anton Regular' })

        const canvas = createCanvas(width, height)
        const ctx = canvas.getContext('2d');
        const partyImage = await loadImage('images/party.png');
        const partyImageFlipped = await loadImage('images/party-flipped.png');

        const image1 = await loadImage(user1.img);

        ctx.fillStyle = "#8460d7";
    
        ctx.fillRect(0, 0, width, height)
        
        ctx.fillStyle = "#f7f7f7";
        
        ctx.textAlign = 'center';

        ctx.font = 'light 80px "Anton Regular"';
        ctx.fillText("Hi I'm James", width/2, 160);

        ctx.font = 'thin 40px "Anton Regular"';
        ctx.fillText(`Thanks to my latest follower ${user1.username}`, width/2, 240);
    
        ctx.font = '25px "Anton Regular"';
        ctx.fillStyle = "#d1eeff";
    
        // ctx.fillText("follow to make banner update", 1350, 350);

        ctx.drawImage(partyImageFlipped, (width/2)-220, 290, 120, 120);

        ctx.drawImage(partyImage, (width/2)+100, 290, 120, 120)

        ctx.beginPath();
        ctx.arc((width/2), 350, 60, 0, 2 * Math.PI);
        ctx.clip();
        ctx.drawImage(image1, (width/2)-(profileImageWidth/2), 290, 120, 120);
    
        const buffer = canvas.toBuffer('image/png')
        fs.writeFileSync('./image.png', buffer)
        return buffer;
    }
}

module.exports = ImageCreator;