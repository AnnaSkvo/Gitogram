<template>
    <button class="storiesItem" @click="$emit('onstoryPress')">
        <div class="border_avatar">
            <div class="avatar">
                <img :src="avatar" class="img" alt="user_avatar">
            </div>
        </div>
        <div class="username">{{ username }}</div>
    </button>
</template>

<script>
export default {
    name: 'StoriesItem',
    props: {
        avatar: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
    },
    data() {
        return {
           
        }
    }
}
</script>

<style scoped>
.border_avatar {
    width: 92px;
    height: 92px;
    border: 2px solid transparent;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.border_avatar {
    border: 2px solid #a6328d;
}

.avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
}

.img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.storiesItem {
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>