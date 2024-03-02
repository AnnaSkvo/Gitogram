<template>
    <ArrowButton @onToggle="toggle" />
    <div class="comments" v-if="shown">
        <ul class="comments_list">
            <li class="comments_item" v-for="comment in feed_comments" :key="comment.id">
                <CommentUser :text="comment.comment" :username="comment.username" />
            </li>
        </ul>
    </div>
</template>

<script>
import ArrowButton from '../../components/ArrowButton/ArrowButton.vue'
import CommentUser from '../../components/CommentUser/CommentUser.vue'

export default {
    name: 'TogglerComponent',
    components: {
        ArrowButton,
        CommentUser
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
            feed_comments: [
                {
                    "id": "1",
                    "username": "joshua_l",
                    "comment": "Enable performance measuring in production, at the user's request"
                },
                {
                    "id": "2",
                    "username": "Camille",
                    "comment": "It's Impossible to Rename an Inherited Slot"
                },
                {
                    "id": "3",
                    "username": "Marselle",
                    "comment": "transition-group with flex parent causes removed items to fly"
                }
            ]
        }
    },
    methods: {
        toggle(isOpened) {

            this.shown = isOpened
            this.$emit("onToggle", isOpened)
        }
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
