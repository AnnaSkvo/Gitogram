<template>
  <header>
    <div class="headerline">
      <HeaderLine>
        <template #navigate>
          <div class="logo">
            <IconComponent name="IconGitogram" />
          </div>
          <div class="rightmenu">
            <div class="icon">
              <IconComponent name="IconHome" />
            </div>
            <div>
              <CurrentUserTop :avatar="currentuser.avatar_url"/>
            </div>
            <div class="icon btn_exit" @click="logout">
              <IconComponent name="IconExit" />
            </div>
          </div>
        </template>

        <template #stories>
          <ul class="stories_list">
            <li class="stories_link" v-for="story in feeds" :key="story.id">
              <StoriesItem :avatar="story.owner.avatar_url" :username="story.owner.login"
                @onstoryPress="$router.push({ name: 'stories', params: { initialSlide: story.id } })" />
            </li>
          </ul>
        </template>
      </HeaderLine>
    </div>
  </header>
  <main class="content_feed">
    <ul class="feed_list">
      <li class="feed_link" v-for="feed in starred" :key="feed.id">
        <div class="news_card x-container">
          <NewsCard>

            <template #user>
              <div class="avatar">
                <img :src="feed.owner.avatar_url" class="img" alt="user_avatar">
              </div>
              <p class="user_name">{{ feed.owner.login }}</p>
            </template>

            <template #news>
              <h1 class="news_title">{{ feed.name }}</h1>
              <p class="news_text">{{ feed.description }}</p>
              <div class="star_fork">
                <div class="star_text">
                  <div class="icon_star_fork">
                    <IconComponent name="IconStar" style="margin-top: 2px;" />
                  </div>
                  <div>Star</div>
                </div>
                <div class="star_value">{{ feed.stargazers_count }}</div>
                <div class="fork_text">
                  <div class="icon_star_fork">
                    <IconComponent name="IconFork" style="margin-top: 2px;" />
                  </div>
                  <div class="fork_text_content">Fork</div>
                </div>
                <div class="fork_value">{{ feed.forks_count }}</div>
              </div>
            </template>

            <template #comments>
              <TogglerComponent :feed="feed" />
            </template>

            <template #date>
              <p class="feed_date">{{ (new Date(feed.created_at)).toLocaleDateString() }}</p>
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
import * as api from '../api'


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
      currentuser: {},
      feeds: [],
      starred: [],
    }
  },
  async created() {
    try {
      const { data } = await api.trendings.getTrendings();
      const starreddata = await api.starred.getStarredRepos();
      this.starred = starreddata.data
      this.feeds = data.items;
    } catch (error) {
      console.log("error")
    }

  },
  methods: {
    async getUser() {
      try {
        const response = await fetch('https://api.github.com/user', {
          headers: {
            Authorization: `token ${localStorage.getItem('token')}`
          }
        });
        this.currentuser = await response.json();
      } catch (error) {
        console.log(error)
      }
    },
    logout() {
      localStorage.removeItem('token');
      window.location.reload();
    }
  },
  mounted() {
    this.getUser();
  }
}
</script>

<style scoped>
.headerline {
  background-color: #FAFAFA;
  border-bottom: 1px solid #eeeeee;
  height: 276px;
}

.logo {
  width: 174px;
}

.icon {
  width: 32px;
  height: 32px;
}

.btn_exit {
  cursor: pointer;
  transition: all 0.2s;
}

.btn_exit:hover {
  transform: scale(1.2);
}


.rightmenu {
  display: flex;
  width: 145px;
  justify-content: space-between;
}

.stories_list {
  display: flex;
  justify-content: start;
  overflow: auto;
}

.stories_link {
  margin: 0 10px;
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
