const express = require("express");
require("dotenv").config();
const ImageService = require('./ImageService');
const TwitterService = require('./TwitterService');
const { pluckLargeImgUrl } = require('./utils');

const app = express()

class Main{
    async updateUserBannerImages(){
        const imageService = new ImageService();
        const twitterService = new TwitterService();
        const data = await twitterService.getRecentFollowers();
        const recentFollowers = data.users;

        const img1 = pluckLargeImgUrl(recentFollowers[0]);

        const buffer = await imageService.createImage(
            {username:recentFollowers[0].screen_name, img:img1}
        );
        
        await twitterService.uploadBannerImage(buffer.toString('base64'));


    }
}

app.get("/", function (req, res) {
  res.send("<h1>Status</h1>");
})

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));

const main = new Main()

setInterval(()=>{
    console.log('update banner');
    main.updateUserBannerImages();
}, 60000);

process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
  });