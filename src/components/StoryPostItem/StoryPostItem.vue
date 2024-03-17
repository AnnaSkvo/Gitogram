<template>
    <div class="story_post_item" :class="{ active }">
        <div class="slider_item_container">
            <div class="header">
                <LineProgress v-if="active" @onFinish="$emit('onProgressFinish')" />
                <div class="user">
                    <div class="avatar">
                        <img :src="data.userAvatar" class="img" alt="user_avatar">
                    </div>
                    <p class="user_name">{{ data.username }}</p>
                </div>
            </div>
            <div class="content">
                <div class="scroll_main">
                <div class="loader" v-if="loading">
                    <SpinnerItem />
                </div>
                <div class="info" v-else>
                    <div v-if="data.content?.length" class="content-text" v-html="data.content"></div>
                    <PlaceholderComponent v-else />
                </div>
            </div>
            </div>
            <div class="footer">
                <xButton :theme="data.following.status ? 'grey': 'green'" :loading="data.following.loading" @click="$emit(data.following.status ? 'onUnFollow' : 'onFollow', data.id)" >{{ data.following.status ? 'Unfollow' : 'Follow' }}</xButton>
            </div>
            <div class="arrow_btn" v-if="active">
                <button v-if="btnsShown.includes('prev')" class="btn btn-prev" @click="$emit('onPrevSlide')">
                    <span class="icon">
                        <IconComponent name="IconArrow" />
                    </span>
                </button>
                <button v-if="btnsShown.includes('next')" class="btn btn-next" @click="$emit('onNextSlide')">
                    <span class="icon">
                        <IconComponent name="IconArrow" />
                    </span>
                </button>
            </div>
        </div>
    </div>




</template>

<script>

import LineProgress from '../../components/LineProgress/LineProgress.vue'
import xButton from '../../components/xButton/xButton.vue'
import IconComponent from '../../icons/IconComponent.vue'
import PlaceholderComponent from '../../components/PlaceholderComponent/PlaceholderComponent.vue'
import SpinnerItem from '../../components/SpinnerItem/SpinnerItem.vue'

export default {
    name: 'StoryPostItem',
    components: {
        LineProgress,
        xButton,
        IconComponent,
        PlaceholderComponent,
        SpinnerItem
    },
    emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish', 'onFollow'],
    props: {
        active: Boolean,
        loading: Boolean,
        btnsShown: {
            type: Array,
            default: () => ['next', 'prev'],
            validator(value) {
                return value.every(item => item === 'next' || item === 'prev')
            }
        },
        data: {
            type: Object,
            required: true,
            default: () => ({})
        }
    }
}
</script>

<style scoped>
.slider_item_container {
    width: 375px;
    height: 667px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #cacaca;
    transform: scale(0.8);
    position: relative;
}

.active .slider_item_container {
    transform: scale(1);
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

.content {
    height: calc(100% - 155px);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.051) 100%);
    border-bottom: 1px solid #cacaca;
}



.footer {
    height: calc(100% - 606px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn {
    width: 36px;
    height: 36px;
    cursor: pointer;
    background-color: #fff;
    border: 2px solid black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon {
    display: block;
    width: 18px;
    height: 18px;
    color: #404040;
}

.btn:hover .icon {
    color: green;
}

.btn-prev{
    position: absolute;
    top: 50%;
    margin-left: -46px;
    transform: rotate(180deg);
    left: 0;
    z-index: 1;
}

.btn-next{
    position: absolute;
    top: 50%;
    margin-right: -46px;
    right: 0;
    z-index: 1;
}

.scroll_main{
    height: calc(100% - 5px);
    margin: 10px 5px 5px 10px;
    overflow: auto;
}

.scroll_main::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

.scroll_main::-webkit-scrollbar-track {
    background: transparent;
}

.scroll_main::-webkit-scrollbar-thumb {
    background-color: #afafaf;
    border-radius: 10px;
}
</style>
