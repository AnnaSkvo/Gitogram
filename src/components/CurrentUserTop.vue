<template>
    <button class="currentuser" @click="$emit('onPress')">
        <div class="avatar">
            <img :src="avatar" class="img" alt="currentuser_avatar">
        </div>
    </button>
</template>

<script>
export default {
    name: 'CurrentUserTop',
    props: {
        avatar: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.avatar, .currentuser {
    width: 32px;
    height: 32px;
    
}

.img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
}
</style>