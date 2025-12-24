import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AppPopup from "@/common/components/popup/AppPopup.vue";

describe("AppPopup", () => {
    it("renders slot content", () => {
        const wrapper = mount(AppPopup, {
            slots: { default: "Hello" }
        });
        expect(wrapper.text()).toContain("Hello");
    });
});
