import StoriesItem from './StoriesItem.vue';

export default {
    title: "StoriesItem",
    component: { StoriesItem },
}

export const defaultView = {
    render: (args) => ({
        components: { StoriesItem },
        setup() {
            return { args };
        },
        template: `<StoriesItem v-bind="args" />`,
    }),
    args: {
        username: "Josh",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmA_K0xJxXq6VQFwJBXUmtFAvvoJJBmxYZg&usqp=CAU",
    
    }
}