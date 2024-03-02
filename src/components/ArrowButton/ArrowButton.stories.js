import ArrowButton from './ArrowButton.vue';

export default {
    title: "ArrowButton",
    component: { ArrowButton },
}

export const defaultView = {
    render: () => ({
        components: { ArrowButton },
        template: `<ArrowButton />`,
    })
}