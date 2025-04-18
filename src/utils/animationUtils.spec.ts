import { describe, expect, test } from "vitest";
import { createOffsetKeyframe } from "./animationUtils";

describe("createOffsetKeyframe", () => {
    const DEFAULT_CONFIGS = {
        id: 1,
        duration: 1000,
        trains: 1,
        paths: "M123456",
    };

    test("should create an offset keyframe", () => {
        const FIRST_LINE_CONFIG = {
            steps: [10, 90],
            ...DEFAULT_CONFIGS,
        };
        const keyframe = createOffsetKeyframe(FIRST_LINE_CONFIG);
        expect(keyframe).toBeDefined();
        expect(keyframe.length).toBe(4);

        expect(keyframe.map((k) => k.offsetPath)).toEqual(Array(4).fill(`path("${DEFAULT_CONFIGS.paths}")`));
        expect(keyframe[0].offsetDistance).toBe("0%");
        expect(keyframe[1].offsetDistance).toBe("10%");
        expect(keyframe[2].offsetDistance).toBe("90%");
        expect(keyframe[3].offsetDistance).toBe("100%");
        
        expect(keyframe[0].opacity).toBe(0);
        expect(keyframe[1].opacity).toBe(1);
        expect(keyframe[2].opacity).toBe(1);
        expect(keyframe[3].opacity).toBe(0);

        expect(keyframe[0].transform).toBe("scale(.3)");
        expect(keyframe[1].transform).toBe("scale(1)");
        expect(keyframe[2].transform).toBe("scale(1)");
        expect(keyframe[3].transform).toBe("scale(.3)");
    });
});
