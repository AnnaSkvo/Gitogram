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
          <h1>Following</h1>
          <li class="feed_link" v-for="feed in starred" :key="feed.id">
            <div class="news_card">
              <div class="card_user">
                <div class="avatar">
                  <img :src="feed.owner.avatar_url" class="img" alt="user_avatar">
                </div>
                <div class="desc_fol">
                  <p class="user_name">{{ feed.owner.login }}</p>
                  <p class="user_descr">user</p>
                </div>

              </div>
              <xButton :theme='green'>{{ 'following' }}</xButton>
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
import xButton from '../components/xButton/xButton.vue'
import * as api from '../api'


export default {
  name: 'FollowingPage',
  components: {
    HeaderLine,
    IconComponent,
    CurrentUserTop,
    xButton
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

.login {
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
  padding: 30px 0;
}

.news_card {
  display: flex;
  justify-content: space-between;
  align-items: center
}

.card_user {
  display: flex;
  align-items: center;
}

.avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  overflow: hidden;
}

.user_name {
  font-size: 18px;
  font-weight: 700;
  padding-left: 10px;
}

.user_descr{
  padding-left: 10px;
  font-size: 12px;
  color: #9E9E9E
}


h1 {
  font-size: 26px;
  font-weight: 700;
}
</style>
