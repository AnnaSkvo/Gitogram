<template>
  <header>
    <div class="headerline">
      <HeaderLine>
        <template #navigate>
          <div class="logo">
            <router-link to="/">
              <IconComponent name="IconGitogram" />
            </router-link>
          </div>
          <div class="rightmenu">
            <div class="icon">
              <router-link to="/">
                <IconComponent name="IconHome" />
              </router-link>
            </div>
            <CurrentUserTop :avatar="currentuser.avatar_url" />
            <div class="icon btn_exit" @click="logout">
              <IconComponent name="IconExit" />
            </div>
          </div>
        </template>
      </HeaderLine>
    </div>
  </header>
  <div class="">
    <main class="content_feed">
      <div class="my-profile">
        <h1>My profile</h1>
        <div class="my-content">
          <div class="user_img">
            <img class="img" :src="currentuser.avatar_url">
          </div>
          <div class="user_desc">
            <div class="login">{{ currentuser.login }}</div>
            <div class="desc">
              <p class="desc_number">{{ currentuser.public_repos }}</p>
              <p class="desc_text">reposts</p>
              <p class="desc_number">{{ currentuser.followers }}</p>
              <p class="desc_text">watchers</p>
            </div>
            <div class="name">{{ currentuser.bio }}</div>
          </div>
        </div>
      </div>
      <div class="container-feed">
        <ul class="feed_list">
          <h1>Repositories</h1>
          <li class="feed_link" v-for="feed in starred" :key="feed.id">
            <div class="news_card">
              <NewsCard>
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
              </NewsCard>
            </div>
          </li>
        </ul>
      </div>
    </main>
  </div>

</template>

<script>
import HeaderLine from '../components/HeaderLine.vue'
import IconComponent from '../icons/IconComponent.vue'
import CurrentUserTop from '../components/CurrentUserTop/CurrentUserTop.vue'
import NewsCard from '../components/NewsCard/NewsCard.vue'

/*--- Этот код с Composition API не работает ---*/
/*import Profile from './ProfilePage.js'
export default {
  name: 'ProfilePage',
  components: {
    HeaderLine,
    IconComponent,
    CurrentUserTop,
    NewsCard
  },
  setup() {
    return {
      ...Profile()
    }
  },
}*/
/*--- конец неработающего кода с Composition API ---*/


/*--- Этот код без Composition API работает ---*/
 
import * as api from '../api'

export default {
  name: 'ProfilePage',
  components: {
    HeaderLine,
    IconComponent,
    CurrentUserTop,
    NewsCard
  },
  data() {
    return {
      currentuser: {},
      starred: []
    }
  },
  async created() {
    try {
      const starreddata = await api.starred.getStarredRepos();
      this.starred = starreddata.data
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
        console.log("this.currentuser", this.currentuser)
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
/*--- конец работающего кода без Composition API ---*/
</script>

<style scoped>
.headerline {
  background-color: #FAFAFA;
  border-bottom: 1px solid #eeeeee;
  height: 126px;
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

.content_feed {
  height: calc(100vh - 126px);
  display: flex;
  justify-content: center;
}

.my-profile {
  padding-top: 32px;
  margin-left: 350px;
  width: 40%;
  border-right: 1px solid #eeeeee;
}

.my-content {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.user_img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.login{
  font-weight: 700;
  font-size: 24px;
}

.desc {
  display: flex;
}

.desc_number {
  font-weight: 700;
  margin-right: 5px;
}

.desc_text {
  margin-right: 10px;
}

.container-feed {
  overflow: auto;
  width: 100%;
}

.feed_list {
  padding: 32px 74px;
  margin-right: 270px;
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

h1 {
  font-size: 26px;
  font-weight: 700;
}
</style>
