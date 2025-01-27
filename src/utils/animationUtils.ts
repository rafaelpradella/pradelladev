const ANIMATION_EASE = "cubic-bezier(.3,0,.3,1)";

export const createKeyframeFromCoordinatesList = (pathCoordinatesList: { x: number, y: number }[]) => {
  return pathCoordinatesList.map((segment, i) => {
      const isFirstOrLast = i === 0 || i === pathCoordinatesList.length - 1;
      return {
          easing: ANIMATION_EASE,
          opacity: isFirstOrLast ? "0" : ".5",
          transform: `translateX(${segment.x}px) translateY(${segment.y}px)`
      }
  });
};
