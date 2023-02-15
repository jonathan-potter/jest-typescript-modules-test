import { bar } from "../src/foo";

describe("foo.bar()", () => {
    it("should return 42", () => {
        expect(bar()).toBe(42);
    });
});
