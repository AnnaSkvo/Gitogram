import CommentUser from './CommentUser.vue';

export default {
    title: "CommentUser",
    component: { CommentUser },
}

export const defaultView = {
    render: (args) => ({
        components: { CommentUser },
        setup() {
            return { args };
        },
        template: `<CommentUser v-bind="args" />`,
    }),
    args: {
        text: "Enable performance measuring in production, at the user's request",
        username: "joshua_l"
    }
}