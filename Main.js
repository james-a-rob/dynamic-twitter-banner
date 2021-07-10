const ImageService = require('./ImageService');
const TwitterService = require('./TwitterService');
const express = require("express")
const app = express()
const {pluckLargeImgUrl} = require('./utils');
const users = [{name: 'james'}, {name: 'bill'}];

class Main{
    async updateUserBannerImages(){
        console.log('running');
        const imageService = new ImageService();
        const twitterService = new TwitterService();
        for (const user of users) {
            const data = await twitterService.getRecentFollowers();
            const recentFollowers = data.users;

            const img1 = pluckLargeImgUrl(recentFollowers[0]);
            console.log(img1);
            const buffer = await imageService.createImage(
                {username:recentFollowers[0].screen_name, img:img1}
            );
            console.log(buffer);
            await twitterService.uploadBannerImage(buffer.toString('base64'))

        }
    }
}

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));

const main = new Main()

setInterval(()=>{
    main.updateUserBannerImages();
}, 60000);