<template>
    <div class="story_post_item" :class="{ active }">
        <div class="slider_item_container">
            <div class="header">
                <LineProgress :active="active" @onFinish="$emit('onProgressFinish')"/>
                <div class="user">
                    <div class="avatar">
                        <img :src="data.user_avatar" class="img" alt="user_avatar">
                    </div>
                    <p class="user_name">{{ data.username }}</p>
                </div>
            </div>
            <div class="content">

                <div class="loader" v-if="loading">
                    <SpinnerItem />
                </div>
                <div class="info" v-else>
                    <div v-if="data.content?.length" class="content-text" v-html="data.content"></div>
                    <PlaceholderComponent v-else :paragrafs="2" />
                </div>
            </div>
            <div class="footer">
                <xButton>Follow</xButton>
            </div>
            <template v-if="active">
                <button v-if="btnsShown.includes('next')" class="btn btn-next" @click="$emit('onNextSlide')">
                    <span class="icon">
                        <IconComponent name="IconArrow" />
                    </span>
                </button>
                <button v-if="btnsShown.includes('prev')" class="btn btn-prev" @click="$emit('onPrevSlide')">
                    <span class="icon">
                        <IconComponent name="IconArrow" />
                    </span>
                </button>
            </template>
        </div>
    </div>




</template>

<script>

import LineProgress from '../../components/LineProgress/LineProgress.vue'
import xButton from '../../components/xButton/xButton.vue'
import IconComponent from '../../icons/IconComponent.vue'

export default {
    name: 'SliderItem',
    components: {
        LineProgress,
        xButton,
        IconComponent
    },
    emits:['onPrevSlide', 'onNextSlide', 'onProgressFinish'],
    props: {
        active: Boolean,
        loading: Boolean,
        btnsShown: {
            type: Array,
            default: () => ['next', 'prev'],
            validator(value) {
                return value.every(item => item == 'next' || item == 'prev')
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
    height: calc(100% - 596px);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
