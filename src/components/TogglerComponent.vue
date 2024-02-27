<template>
    <xButton @onToggle="toggle"/>
    <div class="comments" v-if="shown">
        <ul class="comments_list">
            <li class="comments_item" v-for="comment in feed.feed_comments" :key="comment.id">
                <CommentUser :text="comment.comment" :username="comment.username" />
            </li>
        </ul>
    </div>
</template>

<script>
import xButton from '../components/xButton.vue'
import CommentUser from '../components/CommentUser.vue'

export default {
    name: 'TogglerComponent',
    components: {
        xButton,
        CommentUser
    },
    props: {
        feed:{
            type: Object,
            required: true
        }
    },
    data() {
        return {
            
            shown: false,
        }
    },
    methods: {
        toggle(isOpened) {
           
            this.shown = isOpened
            this.$emit("onToggle",isOpened)
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

