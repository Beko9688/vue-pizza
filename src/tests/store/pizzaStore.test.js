import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { usePizzaStore } from "@/stores/pizza";

describe("pizza store", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it("has initial state", () => {
        const store = usePizzaStore();
        expect(store.$state).toBeDefined();
        expect(Object.keys(store.$state).length).toBeGreaterThan(0);
    });

    it("allows patching state", () => {
        const store = usePizzaStore();

        const keys = Object.keys(store.$state);
        const k = keys[0];

        const before = store.$state[k];
        store.$patch((s) => {
            if (typeof s[k] === "number") s[k] = s[k] + 1;
            else if (typeof s[k] === "string") s[k] = `${s[k]}x`;
            else if (Array.isArray(s[k])) s[k] = [...s[k], "x"];
            else if (s[k] && typeof s[k] === "object") s[k] = { ...s[k], _test: true };
            else s[k] = "x";
        });

        expect(store.$state[k]).not.toEqual(before);
    });
});
