<template>
  <div class="newscard">
      <div class="user">
        <slot name="user"></slot>
      </div>
      <div class="news">
        <slot name="news"></slot>
      </div>
      <div class="comments">
        <slot name="comments"></slot>
      </div>
      <div class="date">
        <slot name="date"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  data() {
    return {
      shown: false,
    }
  },
  methods: {
    toggle(isOpened) {
      this.shown = isOpened
    },

  }
}
</script>

<style scoped>

.user {
  display: flex;
  padding-bottom: 14px;
}

.news {
  border: 1px solid #f1f1f1;
  box-shadow: 0px 0px 20px #f1f1f1;
  border-radius: 10px;
  padding: 24px 20px;
}

.comments {
  padding-top: 10px;
}
</style>