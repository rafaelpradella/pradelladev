const SVG_PATH_SEPARATORS_REGEX = /(?=[HLVhlvhHlLVv])/;
const prevCoordinates = { x: 0, y: 0 };

/**
 * Generates a Move command (M) with coordinates based on the input segment string.
 * Handles different SVG path commands (H, V, L) and converts them to absolute Move commands.
 * @param segmentString - The SVG path segment string (e.g., "H100", "V50", "L100 50")
 */
const getMoveStartCoordinates = (segmentString: string): string => {
  const [pathType, coordinatesString] = [
    segmentString[0],
    segmentString.slice(1),
  ];
  const coordinatesList = coordinatesString.split(" ").map(Number);

  const fullCoordinatesString = (() => {
    switch (pathType) {
      case "H":
      case "h":
        prevCoordinates.x = coordinatesList[0];
        return `${coordinatesList[0]} ${prevCoordinates.y}`;
      case "V":
      case "v":
        prevCoordinates.y = coordinatesList[0];
        return `${prevCoordinates.x} ${coordinatesList[0]}`;
      default:
        [prevCoordinates.x, prevCoordinates.y] = coordinatesList;
        return coordinatesList.join(" ");
    }
  })();

  return `M${fullCoordinatesString}`;
};

/**
 * Splits an SVG path string into individual path segments.
 * @param pathString - The SVG path string to split
 */
const splitPathBySegments = (pathString: string): string[] => {
  const segmentsList = pathString.split(SVG_PATH_SEPARATORS_REGEX);
  const isLastItem = (i: number) => i === segmentsList.length - 1;

  return segmentsList.reduce((acc, segment, i) => {
    if (isLastItem(i)) return acc;

    const moveStartCoordinates = getMoveStartCoordinates(segment);
    const drawLineSegment = segmentsList[i + 1];

    return [...acc, `${moveStartCoordinates}${drawLineSegment}`];
  }, [] as string[]);
};

export { splitPathBySegments };
