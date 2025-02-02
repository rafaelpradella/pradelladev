const ANIMATION_EASE = "cubic-bezier(.3,0,.3,1)";

const createKeyframeFromCoordinatesList = (svgPathList: string[]) => {
  const isLastIndex = (i: number) => i === svgPathList?.length - 1;

  return svgPathList.flatMap((path, i) => [
    {
      easing: ANIMATION_EASE,
      offsetDistance: '0%',
      offsetPath: `path("${path}")`,
      opacity: i === 0 ? 0 : 1,
    },
    {
      easing: ANIMATION_EASE,
      offsetDistance: '100%',
      offsetPath: `path("${path}")`,
      opacity: isLastIndex(i) ? 0 : 1,
    }
  ]) as Keyframe[];
};

export { createKeyframeFromCoordinatesList };
