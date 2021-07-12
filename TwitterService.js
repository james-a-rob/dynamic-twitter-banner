const { TwitterClient } = require('twitter-api-client');

const mockData = {
    users: [
      {
        id: 945319657044668400,
        id_str: '945319657044668416',
        name: 'Pavlos Peridis',
        screen_name: 'PeridisPavlos',
        location: 'Athens, Greece',
        description: 'Be your most productive self. I tweet about 👇👇👇\n' +
          '\n' +
          'Sleep | Diet | Exercise | Work | Focus | Routines',
        url: 'https://t.co/CGdAny39M2',
        entities: [Object],
        protected: false,
        followers_count: 96,
        friends_count: 185,
        listed_count: 0,
        created_at: 'Mon Dec 25 15:45:44 +0000 2017',
        favourites_count: 2340,
        utc_offset: null,
        time_zone: null,
        geo_enabled: true,
        verified: false,
        statuses_count: 905,
        lang: null,
        status: [Object],
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'F5F8FA',
        profile_background_image_url: null,
        profile_background_image_url_https: null,
        profile_background_tile: false,
        profile_image_url: 'http://pbs.twimg.com/profile_images/1409422017464578049/rvVN5a5w_normal.jpg',
        profile_image_url_https: 'https://pbs.twimg.com/profile_images/1409422017464578049/rvVN5a5w_normal.jpg',
        profile_banner_url: 'https://pbs.twimg.com/profile_banners/945319657044668416/1587545119',
        profile_link_color: '1DA1F2',
        profile_sidebar_border_color: 'C0DEED',
        profile_sidebar_fill_color: 'DDEEF6',
        profile_text_color: '333333',
        profile_use_background_image: true,
        has_extended_profile: true,
        default_profile: true,
        default_profile_image: false,
        following: false,
        live_following: false,
        follow_request_sent: false,
        notifications: false,
        muting: false,
        blocking: false,
        blocked_by: false,
        translator_type: 'none',
        withheld_in_countries: []
      }
    ],
    next_cursor: 1704201531341112000,
    next_cursor_str: '1704201531341112018',
    previous_cursor: 0,
    previous_cursor_str: '0',
    total_count: null
  }

const twitterClient = new TwitterClient({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
});

class TwitterService{
    async getRecentFollowers(){     
          const data = await twitterClient.accountsAndUsers.followersList({count:1}).catch((e)=>console.log(e));
          return data;
    }
    async uploadBannerImage(banner){
        twitterClient.accountsAndUsers.accountUpdateProfileBanner({banner}).catch((e)=>console.log(e));

    }
}

module.exports = TwitterService;