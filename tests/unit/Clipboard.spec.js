import ComponentCategoryPage from "@/pages/ComponentCategoryPage.vue";
import { shallowMount } from "@vue/test-utils";

describe("ComponentCategoryPage.vue", () => {
    it('copy code on copy button click', () => {
        const wrapper = shallowMount(ComponentCategoryPage, {
            props: {
                name: 'Buttons'
            }
        });
        const copyButtons = wrapper.findAll('#copybtn');
        copyButtons.forEach(copyButton => {
            copyButton.trigger('click');
            expect(copyButton.text()).toBe(component.codeHtml);
        });
    });
});