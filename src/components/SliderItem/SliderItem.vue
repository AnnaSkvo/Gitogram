<template>
    <div class="slider_item_container">
        <div class="header">
            <LineProgress :second="slider_item.second"></LineProgress>
            <div class="user">
                <div class="avatar">
                    <img :src="slider_item.user_avatar" class="img" alt="user_avatar">
                </div>
                <p class="user_name">{{ slider_item.username }}</p>
            </div>
        </div>
        <div class="main">
            <div class="scroll_main">
                <div class="text_img">
                <img :src="slider_item.image" class="img_text" alt="img_text">
            </div>
            <ul class="text_list">
                <li class="text_p" v-for="text in slider_item.text">{{ text }}</li>
            </ul>
            </div>
        </div>
        <div class="footer">
            <xButton>Follow</xButton>
        </div>

    </div>
</template>

<script>

import LineProgress from '../../components/LineProgress/LineProgress.vue'
import xButton from '../../components/xButton/xButton.vue'

export default {
    name: 'SliderItem',
    components: {
        LineProgress,
        xButton
    },
    props: {
        slider_item: {
            type: Object,
            required: true
        }
    },
}
</script>

<style scoped>
.slider_item_container {
    width: 375px;
    height: 667px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #cacaca;
}

.header {
    height: 67px;
    padding: 8px 12px;
    border-bottom: 1px solid #cacaca;
}

.user {
    padding: 22px 0px;
    display: flex;
}

.avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
}

.img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.user_name {
    line-height: 32px;
    font-weight: 700;
    padding-left: 12px;
}

.main {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.051) 100%);
    border-bottom: 1px solid #cacaca;
}

.scroll_main{
    height: 500px;
    max-height: 500px;
    margin: 5px 5px;
    overflow-y: auto;
    overflow-x: hidden;
}

.text_img {
    width: 293px;
    height: 204px;
    overflow: hidden;
    padding-top: 30px;
    margin: 0 auto;
}

.img_text {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.text_p {
    padding: 15px 12px;
}

.footer {
    height: calc(100% - 596px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.scroll_main::-webkit-scrollbar {
    width: 5px;
}

.scroll_main::-webkit-scrollbar-track {
    background: transparent;
}

.scroll_main::-webkit-scrollbar-thumb {
    background-color: #afafaf;
    border-radius: 10px;
}
</style>

