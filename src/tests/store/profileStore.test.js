import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useProfileStore } from "@/stores/profile";

describe("profile store", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it("has initial state shape", () => {
        const store = useProfileStore();
        expect(store.$state).toBeDefined();
    });

    it("can reset state", () => {
        const store = useProfileStore();

        const keys = Object.keys(store.$state);
        expect(keys.length).toBeGreaterThan(0);

        const k = keys[0];
        store.$state[k] = "changed";
        store.$reset();

        expect(store.$state[k]).not.toBe("changed");
    });
});
