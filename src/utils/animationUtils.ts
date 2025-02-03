const ANIMATION_EASE = "cubic-bezier(.3,0,.3,1)";

const createKeyframeFromCoordinatesList = (svgPathList: string[]) => {
  const keyframesList: Keyframe[]  = svgPathList.map((path, i) => ({
      easing: ANIMATION_EASE,
      offsetDistance: '0%',
      offsetPath: `path("${path}")`,
      opacity: i === 0 ? 0 : .75,
  }))

  return [...keyframesList, { easing: ANIMATION_EASE, opacity: 0, offsetDistance: '100%'}]
}

export { createKeyframeFromCoordinatesList };
