import CurrentUserTop from './CurrentUserTop.vue';

export default {
    title: "CurrentUserTop",
    component: { CurrentUserTop },
}

export const defaultView = {
    render: (args) => ({
        components: { CurrentUserTop },
        setup() {
            return { args };
        },
        template: `<CurrentUserTop v-bind="args" />`,
    }),
    args: {
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmA_K0xJxXq6VQFwJBXUmtFAvvoJJBmxYZg&usqp=CAU",
    }
}