import NewsCard from './NewsCard.vue';
import FeedsPage from '../../components/FeedsPage.vue';

export default {
    title: "NewsCard",
    component: { NewsCard },
}

export const defaultView = {
    render: (args) => ({
        components: { NewsCard, FeedsPage },
        setup() {
            return { args };
        },
        template: `
        <NewsCard>
            <template #user>
              <div class="avatar" style="width: 44px;
              height: 44px;
              border-radius: 50%;
              overflow: hidden;">
                <img :src="args.user_avatar" class="img" alt="user_avatar" style=" width: 100%;
                height: 100%;
                object-fit: cover;">
              </div>
              <p class="user_name" style="font-size: 18px;
              line-height: 44px;
              font-weight: 700;
              padding-left: 10px;">{{ args.username }}</p>
            </template>
            <template #news>
              <h1 class="news_title" style="font-size: 28px;
              font-weight: 700;
              padding-bottom: 20px;">{{ args.feed_title }}</h1>
              <p class="news_text">{{ args.feed_text }}</p>
              <div class="star_fork" style="display: flex;
              border: 1px solid #eaeaea;
              border-radius: 6px;
              box-shadow: 0px 1px 0px 0px #1B1F230A;
              width: fit-content;
              margin-top: 30px;">
                <div class="star_text" style=" padding: 5px 10px;
                background: #FAFBFC;
                border-right: 1px solid #eaeaea;
                display: flex;
                cursor: pointer;">
                  <div class="icon_star_fork" style=" width: 14px;
                  height: 14px;
                  padding-right: 5px;">
                    <i>i</i>
                  </div>
                  <div>Star</div>
                </div>
                <div class="star_value" style=" padding: 5px 10px;
                border-right: 1px solid #eaeaea;">{{ args.star }}</div>
                <div class="fork_text" style=" padding: 5px 10px;
                background: #FAFBFC;
                border-right: 1px solid #eaeaea;
                display: flex;">
                  <div class="icon_star_fork" style=" width: 14px;
                  height: 14px;
                  padding-right: 5px;">
                  <i>i</i>
                  </div>
                  <div class="fork_text_content" style="font-weight: 700;">Fork</div>
                </div>
                <div class="fork_value" style=" padding: 5px 10px;
                font-weight: 700;">{{ args.fork }}</div>
              </div>
            </template>
            <template #comments>
              <h1> TogglerComponent </h1>
            </template>
            <template #date>
              <p class="feed_date" style="font-size: 12px;
              color: #00000066;
              letter-spacing: 10%;
              padding-top: 10px;">{{ args.feed_date }}</p>
            </template>
          </NewsCard>`,
    }),
    args: {
        "id": "e9a4adf8-042a-466a-a535-145efa19bcf3",
        "user_id": "ab8c3636-2ae3-4856-a2b1-7dd17b5f4802",
        "user_avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmA_K0xJxXq6VQFwJBXUmtFAvvoJJBmxYZg&usqp=CAU",
        "username": "joshua_l",
        "feed_title": "Vue.js",
        "feed_text": "JavaScript framework for building interactive web applications ⚡",
        "feed_date": "15 MAY",
        "star": "156k",
        "fork": 4,
        "feed_comments": [
            {
                "id": "1",
                "username": "joshua_l",
                "comment": "Enable performance measuring in production, at the user's request"
            },
            {
                "id": "2",
                "username": "Camille",
                "comment": "It's Impossible to Rename an Inherited Slot"
            },
            {
                "id": "3",
                "username": "Marselle",
                "comment": "transition-group with flex parent causes removed items to fly"
            }
        ]
    }
}
