<template>
    <header>
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
                            <IconComponent name="IconClose" />
                        </router-link>
                    </div>
                </div>
            </template>
        </HeaderLine>
    </header>
    <main class="content_slider">
        <StoriesSlider :initialSlide="Number($route.params.initialSlide)"/>
    </main>
</template>

<script>
import HeaderLine from '../components/HeaderLine.vue'
import IconComponent from '../icons/IconComponent.vue'
import StoriesSlider from '../components/StoriesSlider/StoriesSlider.vue'

export default {
    name: 'StoriesPage',
    components: {
        HeaderLine,
        IconComponent,
        StoriesSlider
    },
    data() {
        return {
        }
    },
    mounted() {
        console.log("4 $route.params.initialSlide",this.$route.params.initialSlide)
        console.log("5 this.initialSlide",this.initialSlide)
        console.log("6 this.$route",this.$route)
    }
}
</script>

<style scoped>
.headerline {
    background-color: #000000;
}

.logo {
    width: 174px;
    color: #fff;
    cursor: pointer;
}

.icon {
    color: #fff;
    width: 23px;
    height: 23px;
    cursor: pointer;
}

.rightmenu {
    display: flex;
    width: 145px;
    justify-content: space-between;
}

.content_slider {
    background-color: #000000;
    height: calc(100vh - 128px);
    overflow: hidden;
}
</style>