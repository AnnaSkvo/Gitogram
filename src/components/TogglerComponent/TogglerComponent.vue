<template>
    <ArrowButton @onToggle="toggle" />
    <div class="comments" v-if="shown">
        <ul class="comments_list" v-if="feed_comments?.length">
            <li class="comments_item" v-for="comment in feed_comments" :key="comment.id">
                <CommentUser :text="comment.body" :username="comment.user.login" />
            </li>
        </ul>
        <PlaceholderStringComponent v-else />
    </div>
</template>

<script>
import ArrowButton from '../../components/ArrowButton/ArrowButton.vue'
import CommentUser from '../../components/CommentUser/CommentUser.vue'
import PlaceholderStringComponent from '../../components/PlaceholderStringComponent/PlaceholderStringComponent.vue'

export default {
    name: 'TogglerComponent',
    components: {
        ArrowButton,
        CommentUser,
        PlaceholderStringComponent
    },
    props: {
        feed: {
            type: Object,
            required: true
        }
    },
    data() {
        return {

            shown: false,
            feed_comments: []
        }
    },
    methods: {
        toggle(isOpened) {

            this.shown = isOpened
            this.$emit("onToggle", isOpened)

            if (this.shown) {
                this.getComments(this.feed);
            }
        },
        async getComments(feed) {
            try {
                const response = await fetch(`${feed.issue_comment_url.replace('{/number}', '')}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                this.feed_comments = await response.json();
            } catch (e) {
                console.log(e)
            }
        },
    }
}
</script>

<style scoped>
.button {
    display: inline-flex;
    align-items: center;
    padding: 0 0 10px 0;
}

.icon {
    width: 10px;
    transform: rotate(180deg);
    line-height: 0;
    margin-left: 5px;

}

.button.active .icon {
    transform: rotate(0deg);
}
</style>
