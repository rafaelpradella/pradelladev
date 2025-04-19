import type { TLinesConfig } from "@components/MapAnimation/LinesConfig";

const createOffsetKeyframe = (lineConfig: TLinesConfig[0]): Keyframe[] => {
	const { steps, paths } = lineConfig;
	const sortedSteps = steps.sort((a, b) => a - b);
	const stepsWithInitials = [0, ...sortedSteps, 100];

	return stepsWithInitials.map((step, i) => {
		const isInitial = i === 0 || i === stepsWithInitials.length - 1;

		return {
			easing: "cubic-bezier(.3,0,.3,1)",
			offsetPath: `path("${paths}")`,
			offsetDistance: `${step}%`,
			opacity: isInitial ? 0 : 1,
			transform: isInitial ? "scale(.3)" : "scale(1)",
		};
	});
};

export { createOffsetKeyframe };
