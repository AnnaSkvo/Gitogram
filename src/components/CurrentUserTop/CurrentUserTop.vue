<template>
    <button class="currentuser" @click="currentuserPress">
        <img :src="avatar" class="img" alt="currentuser_avatar">
        <ul v-if="contextmenu" class="contextmenu">
            <li class="contextmenu_link">
                <div class="contextmenu_link-text" @click="$router.push({ name: 'profile' })">Profile</div>
                <div class="contextmenu_link-text" @click="$router.push({ name: 'following' })">Following</div>
            </li>
        </ul>
    </button>
</template>

<script>
export default {
    name: 'CurrentUserTop',
    data() {
        return {
            contextmenu: false,
        }
    },
    props: {
        avatar: {
            type: String,
            required: true
        }
    },
    methods: {
        currentuserPress() {
            this.contextmenu = !this.contextmenu

        },
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
    cursor: pointer;

}

.contextmenu {
    position: absolute;
    border: 1px solid #f1f1f1;
    box-shadow: 0px 0px 20px #f1f1f1;
    border-radius: 10px;
    padding: 10px 10px;
    background-color: white;
}

.contextmenu_link {
    cursor: pointer;
}

.contextmenu_link-text:hover {
    color: #a6328d
}
</style>