import xButton from './xButton.vue';

export default {
    title: "xButton",
    component: { xButton },
}

export const defaultView = {
    render: (args) => ({
        components: { xButton },
        template: `<xButton>Follow</xButton>`,
    }),
}

export const currentTextOnHover = {
    render: (args) => ({
        components: { xButton },
        setup() {
            return { args };
        },
        template: `<xButton v-bind="args"></xButton>`,
    }),
    args: {
        text: "Following",
        hoverText: "Unfollow"
    }
}