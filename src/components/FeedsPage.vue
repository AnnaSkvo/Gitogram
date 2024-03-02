<template>
  <header>
    <HeaderLine>
      <template #navigate>
        <div class="logo">
          <IconComponent name="IconGitogram" />
        </div>
        <div class="rightmenu">
          <div class="icon">
            <IconComponent name="IconHome" />
          </div>
          <CurrentUserTop :avatar="currentuser.avatar" @onPress="currentuserPress(currentuser.id)" />
          <div class="icon">
            <IconComponent name="IconExit" />
          </div>
        </div>
      </template>
      <template #stories>
        <ul class="stories_list">
          <li class="stories_link" v-for="story in stories" :key="story.id">
            <StoriesItem :avatar="story.avatar" :username="story.username" @onPress="storyPress(story.id)" />
          </li>
        </ul>
      </template>
    </HeaderLine>
  </header>
  <main class="content_feed">
    <ul class="feed_list">
      <li class="feed_link" v-for="feed in feeds" :key="feed.id">
        <div class="news_card">
          <NewsCard>
            <template #user>
              <div class="avatar">
                <img :src="feed.user_avatar" class="img" alt="user_avatar">
              </div>
              <p class="user_name">{{ feed.username }}</p>
            </template>
            <template #news>
              <h1 class="news_title">{{ feed.feed_title }}</h1>
              <p class="news_text">{{ feed.feed_text }}</p>
              <div class="star_fork">
                <div class="star_text">
                  <div class="icon_star_fork">
                    <IconComponent name="IconStar" style="margin-top: 2px;" />
                  </div>
                  <div>Star</div>
                </div>
                <div class="star_value">{{ feed.star }}</div>
                <div class="fork_text">
                  <div class="icon_star_fork">
                    <IconComponent name="IconFork" style="margin-top: 2px;" />
                  </div>
                  <div class="fork_text_content">Fork</div>
                </div>
                <div class="fork_value">{{ feed.fork }}</div>
              </div>
            </template>
            <template #comments>
              <TogglerComponent :feed="feed" />
            </template>
            <template #date>
              <p class="feed_date">{{ feed.feed_date }}</p>
            </template>
          </NewsCard>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
import HeaderLine from '../components/HeaderLine.vue'
import IconComponent from '../icons/IconComponent.vue'
import StoriesItem from '../components/StoriesItem/StoriesItem.vue'
import TogglerComponent from '../components/TogglerComponent/TogglerComponent.vue'
import CurrentUserTop from '../components/CurrentUserTop/CurrentUserTop.vue'
import NewsCard from '../components/NewsCard/NewsCard.vue'

import stories from './stories.json'
import currentuser from './currentuser.json'
import feeds from './feeds.json'


export default {
  name: 'FeedsPage',
  components: {
    HeaderLine,
    IconComponent,
    StoriesItem,
    TogglerComponent,
    CurrentUserTop,
    NewsCard
  },
  data() {
    return {
      stories,
      currentuser,
      feeds
    }
  },
  methods: {
    storyPress(id) {
      console.log("id", id)
    },
    currentuserPress(id) {
      console.log("cvurrent_user_id", id)
    }
  }
}
</script>

<style scoped>
.logo {
  width: 174px;
}

.icon {
  width: 32px;
  height: 32px;
}

.rightmenu {
  display: flex;
  width: 145px;
  justify-content: space-between;
}

.stories_list {
  display: flex;
  justify-content: space-between;
}

.content_feed {
  height: calc(100vh - 276px);
  overflow: auto;
}

.feed_list {
  padding: 32px 0;
}

.feed_link {
  padding-bottom: 20px;
}

.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user_name {
  font-size: 18px;
  line-height: 44px;
  font-weight: 700;
  padding-left: 10px;
}

.news_title {
  font-size: 28px;
  font-weight: 700;
  padding-bottom: 20px;
}

.feed_date {
  font-size: 12px;
  color: #00000066;
  letter-spacing: 10%;
  padding-top: 10px;
}

.star_fork {
  display: flex;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  box-shadow: 0px 1px 0px 0px #1B1F230A;
  width: fit-content;
  margin-top: 30px;
}

.star_text {
  padding: 5px 10px;
  background: #FAFBFC;
  border-right: 1px solid #eaeaea;
  display: flex;
  cursor: pointer;
}

.star_text:hover .icon_star_fork {
  color: green;
}

.star_value {
  padding: 5px 10px;
  border-right: 1px solid #eaeaea;
}

.fork_text {
  padding: 5px 10px;
  background: #FAFBFC;
  border-right: 1px solid #eaeaea;
  display: flex;
}

.fork_text_content {
  font-weight: 700;
}

.fork_value {
  padding: 5px 10px;
  font-weight: 700;
}

.icon_star_fork {
  width: 14px;
  height: 14px;
  padding-right: 5px;
}
</style>
