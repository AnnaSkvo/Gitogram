import * as api from '../api'
import { ref, reactive, onMounted } from "vue";

export default () => {

    let currentuser = reactive({});
    let starred = ref([])

    async () => {
        try {
            const starreddata = await api.starred.getStarredRepos();
            starred = starreddata.data
        } catch (error) {
            console.log("error")
        }
    }

    const getUser = async () => {
        try {
            const response = await fetch('https://api.github.com/user', {
                headers: {
                    Authorization: `token ${localStorage.getItem('token')}`
                }
            });
            currentuser = await response.json();
        } catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }
    onMounted(() => {
        getUser()
    })

    return {
        currentuser,
        starred,
        getUser,
        logout
    }
}