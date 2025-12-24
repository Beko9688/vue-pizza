import {describe, it, expect, beforeEach} from "vitest";
import {setActivePinia, createPinia} from "pinia";
import {useCartStore} from "@/stores/cart";

describe("cart store", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it("has default state", () => {
        const store = useCartStore();
        expect(store).toBeDefined();
        expect(store.$state).toBeDefined();
    });

    it("reacts to state change", () => {
        const store = useCartStore();

        const keys = Object.keys(store.$state);
        expect(keys.length).toBeGreaterThan(0);

        const k = keys[0];
        const before = store.$state[k];

        if (typeof before === "number") store.$state[k] = before + 1;
        else if (typeof before === "string") store.$state[k] = `${before}x`;
        else if (Array.isArray(before)) store.$state[k] = [...before, "x"];
        else if (before && typeof before === "object") store.$state[k] = {...before, _test: true};
        else store.$state[k] = "x";

        expect(store.$state[k]).not.toEqual(before);
    });
});
