<template>
    <div class="auth_container">
        <div class="logo">
            <IconComponent name="IconGitogram" />
        </div>
        <div class="desc">
            <p>More than just one repository.</p>
            <p>This is our digital world.</p>
        </div>
        <button class="btn" @click="getToken">
            <div class="btn_text">Authorize with github</div>
            <div class="btn_icon">
                <IconComponent name="IconGit" />
            </div>

        </button>

        <div class="img_auth">
            <IconComponent name="IconAuth" />
        </div>
    </div>
</template>

<script>
import env from '../../env';
import IconComponent from '../icons/IconComponent.vue'


export default {
    name: 'AuthPage',
    components: {
        IconComponent,
    },
    methods: {
        getToken() {
            const apiUrl = 'https://github.com/login/oauth/authorize';
            const params = new URLSearchParams();
            params.append('client_id', env.clientId);
            params.append('scope', 'repo:status read:user');
            window.location.href = `${apiUrl}?${params}`
        }
    },
    async created() {
        const code = new URLSearchParams(window.location.search).get('code');
        if (code) {
            try {
                const response = await fetch('https://webdev-api.loftschool.com/github', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        clientId: env.clientId, clientSecret: env.clientSecret, code
                    })

                });
                const { token } = await response.json();
                localStorage.setItem("token", token);
                this.$router.replace({ name: "feeds" });
            } catch (e) {
                console.log(e)
            }

        }
    }
}
</script>

<style scoped>
.auth_container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.logo {
    width: 200px;
    margin-bottom: 10px;
}

.desc {
    color: #6F6F6F;
    margin-bottom: 30px;

}

.btn {
    width: 252px;
    display: flex;
    background: #31AE54;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 10px 24px;
    border-radius: 10px;
    margin-bottom: 70px;
    cursor: pointer;

}

.btn:hover{
    background: gray;
}

.btn_text {
    font-size: 16px;
    font-weight: 700;
}

.btn_icon {
    width: 24px;
    height: 24px;
    margin-top: -2px;
}

.img_auth {
    width: 40%;
}
</style>