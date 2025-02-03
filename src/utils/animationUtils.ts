const ANIMATION_EASE = "cubic-bezier(.3,0,.3,1)";

const createKeyframeFromCoordinatesList = (svgPathList: string[]) => {
  const isLastIndex = (i: number) => i === svgPathList?.length - 1;

  return svgPathList.map((path, i) => ({
      easing: ANIMATION_EASE,
      offsetDistance: '0%',
      offsetPath: `path("${path}")`,
    })
)};

export { createKeyframeFromCoordinatesList };
