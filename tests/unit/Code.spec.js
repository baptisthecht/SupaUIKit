import ComponentCategoryPage from "@/pages/ComponentCategoryPage.vue";
import { shallowMount } from "@vue/test-utils";

describe("ComponentCategoryPage.vue", () => {
    it('has no empty code blocks', () => {
        const wrapper = shallowMount(ComponentCategoryPage, {
            props: {
                name: 'Buttons'
            }
        });
        const codeBlocks = wrapper.findAll('code');
        codeBlocks.forEach(codeBlock => {
            expect(codeBlock.text()).not.toBe('');
        });
    });
});