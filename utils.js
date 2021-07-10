module.exports = {
    pluckLargeImgUrl: (user)=>{
        return user.profile_image_url.replace("normal", "bigger");
    }
}