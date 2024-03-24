import { shallowMount } from "@vue/test-utils";
import ArrowButton from "@/components/ArrowButton/ArrowButton.vue";

describe("ArrowButton", () => {
    it("Изменяет надпись при клике", async () => {
        const wrapper = shallowMount(ArrowButton);
        expect(wrapper.find('.text').text()).toBe('View issues');
        await wrapper.find('button').trigger('click');
        expect(wrapper.find('.text').text()).toBe('Hide issues');
    })
})
