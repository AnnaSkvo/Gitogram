import TogglerComponent from './TogglerComponent.vue';

export default {
    title: "TogglerComponent",
    component: { TogglerComponent },
}

export const defaultView = {
    render: (args) => ({
        components: { TogglerComponent },
        setup() {
            return { args };
        },
        template: `<TogglerComponent v-bind="args" />`,
    }),
    args: {
        feed: {
            "id": "e9a4adf8-042a-466a-a535-145efa19bcf3",
            "user_id": "ab8c3636-2ae3-4856-a2b1-7dd17b5f4802",
            "user_avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmA_K0xJxXq6VQFwJBXUmtFAvvoJJBmxYZg&usqp=CAU",
            "username": "joshua_l",
            "feed_title": "Vue.js",
            "feed_text": "JavaScript framework for building interactive web applications ⚡",
            "feed_date": "15 MAY",
            "star": "156k",
            "fork": 4,
            "feed_comments": [
                {
                    "id": "1",
                    "username": "joshua_l",
                    "comment": "Enable performance measuring in production, at the user's request"
                },
                {
                    "id": "2",
                    "username": "Camille",
                    "comment": "It's Impossible to Rename an Inherited Slot"
                },
                {
                    "id": "3",
                    "username": "Marselle",
                    "comment": "transition-group with flex parent causes removed items to fly"
                }
            ]
        }
    }
}