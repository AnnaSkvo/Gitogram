<template>
    <div class="stories_slider">
        <div class="stories_container">
            <ul class="stories" ref="item">
                <li class="stories-item" v-for="(trending, ndx) in trendings" :key="trending.id">
                    <StoryPostItem :data="getStoryData(trending)" :active="slideNdx === ndx"
                        :loading="slideNdx === ndx && loading" :btnsShown="activeBtns"
                        @onNextSlide="handleSlide(ndx + 1)" @onPrevSlide="handleSlide(ndx - 1)"
                        @onProgressFinish="handleSlide(ndx + 1)" />
                </li>
            </ul>
            <pre>{{ trendings }}</pre>

        </div>
    </div>
</template>

<script>
import StoryPostItem from '../../components/StoryPostItem/StoryPostItem.vue'
import { mapState, mapActions } from "vuex"

export default {
    name: 'StoriesSlider',
    props: {
        initialSlide: {
            type: Number
        }
    },
    components: {
        StoryPostItem
    },
    data() {
        return {
            slideNdx: 0,
            sliderPosition: 0,
            loading: false,
            btnsShown: true
        };
    },
    computed: {
        ...mapState({
            trendings: state => state.trendings.data
        }),
        activeBtns() {
            if (this.btnsShown === false) return []
            if (this.slideNdx === 0) return ['next']
            if (this.slideNdx === this.trendings.length - 1) return ['prev']
            return ['next', 'prev'];
        }
    },
    methods: {
        ...mapActions({
            fetchTrendings: "trendings/fetchTrendings",
            fetchReadme: "trendings/fetchReadme"
        }),
        async fetchReadmeForActiveSlide() {
            const { id, owner, name } = this.trendings[this.slideNdx];
            await this.fetchReadme({ id, owner: owner.login, repo: name })
        },
        getStoryData(obj) {
            return {
                id: obj.id,
                userAvatar: obj.owner?.avatar_url,
                username: obj.owner?.login,
                content: obj.readme
            }
        },
        moveSlider(slideNdx) {
            const { item } = this.$refs;
            const slideWidth = 378;
            this.slideNdx = slideNdx;
            this.sliderPosition = -(slideWidth * slideNdx);

            item.style.transform = `translateX(${this.sliderPosition}px)`
        },
        async loadReadme() {
            this.loading = true;
            this.btnsShown = false;
            try {
                await this.fetchReadmeForActiveSlide();
            } catch (e) {
                console.log(e);

            } finally {
                this.loading = false;
                this.btnsShown = true;
            }
        },
        async handleSlide(slideNdx) {
            this.moveSlider(slideNdx);
            await this.loadReadme()
        },
    },
    async mounted() {
        if (this.initialSlide) {
            const ndx = this.trendings.findIndex(item => item.id === this.initialSlide)
            await this.handleSlide(ndx)
        }
        await this.fetchTrendings();
        await this.loadReadme()
    }
}
</script>

<style scoped>
.stories {
    display: flex;
    align-items: center;
    position: absolute;
    left: 50%;
    margin-left: -188px;
    transition: .4s;
}

.stories_container {
    height: 660px;
    position: relative;
}
</style>
