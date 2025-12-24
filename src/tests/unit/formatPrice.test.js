import { describe, it, expect } from "vitest";
import { formatPrice } from "@/common/utils/formatPrice";

describe("formatPrice", () => {
    it("formats integer", () => {
        expect(formatPrice(199)).toBe("199 ₽");
    });

    it("formats numeric string", () => {
        expect(formatPrice("300")).toBe("300 ₽");
    });
});
