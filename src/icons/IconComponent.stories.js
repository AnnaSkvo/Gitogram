import IconComponent from './IconComponent.vue'

export default {
    title: "IconComponent",
    component: { IconComponent },
    decorators: [() => ({ template: '<div style="width: 30px;"><story/></div>' })],
}

export const defaultView = {
    render: (args) => ({
        components: { IconComponent },
        setup() {
            return { args };
        },
        template: `<IconComponent v-bind="args" />`,
    }),
    args: {
        name: "IconHome",
    }
}