<template>
    <button class="currentuser" @click="$emit('onPress')">
        <img :src="avatar" class="img" alt="currentuser_avatar">
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
.currentuser {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
}

.img {
    width: 100%;
    height: 100%;
    object-fit: cover;

}
</style>