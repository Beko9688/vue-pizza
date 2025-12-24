import {describe, it, expect} from "vitest";
import {mount} from "@vue/test-utils";
import PizzaConstructor from "@/modules/constructor/PizzaConstructor.vue";

describe("PizzaConstructor", () => {
    it("renders ingredient layer when ingredient exists", () => {
        const wrapper = mount(PizzaConstructor, {
            global: {
                stubs: {AppDrop: {template: "<div><slot /></div>"}},
            },
            props: {
                dough: "light",
                sauce: "tomato",
                ingredients: {bacon: 1},
            },
        });

        expect(wrapper.find(".pizza__filling--bacon").exists()).toBe(true);
    });
});
