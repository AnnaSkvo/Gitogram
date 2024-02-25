<template>
    <div class="comment">
        <p>
            <span class="username">{{ username }}</span>
            {{ text }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'CommentUser',
    props: {
        username: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.username {
    font-weight: 700;
    padding-right: 5px;
}
</style>