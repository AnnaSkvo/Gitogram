import { mount } from "@vue/test-utils";
import TogglerComponent from "@/components/TogglerComponent/TogglerComponent.vue";

describe("TogglerComponent", () => {
    it("Выполнит загрузку комментариев", async () => {
        const wrapper = mount(TogglerComponent);
        await wrapper.find('button').trigger('click');
        expect(wrapper.emitted().onToggle.length).toBe(1)
    });
})