import LineProgress from './LineProgress.vue';

export default {
    title: "LineProgress",
    component: { LineProgress },
    argTypes: {
        onFinish: {
            action: "onFinish",
            description: "finish progress"
        }
    }
}

export const defaultView = {
    render: (args) => ({
        components: { LineProgress },
        setup() {
            return { args };
        },
        template: `<LineProgress @onFinish="args.onFinish"></LineProgress>`,
    }),
}