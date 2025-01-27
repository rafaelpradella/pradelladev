type TLineCoordinateProps = {
  type: string;
  x: number;
  y: number;
};

const getPathType = (str: string): string | undefined => {
  const getLetters = /[A-Z]/;
  return getLetters.exec(str)?.[0];
};

let prevX = 0;
let prevY = 0;
const getCoordinates = (str: string): number[] => {
  const pathType = getPathType(str) ?? "";
  const nodeCoordinates: string[] = str.replace(pathType, "").split(" ");

  switch (pathType) {
    case "h":
    case "H":
      prevX = parseInt(nodeCoordinates[0]);
      return [parseInt(nodeCoordinates[0]), prevY];
    case "v":
    case "V":
      prevY = parseInt(nodeCoordinates[0]);
      return [prevX, parseInt(nodeCoordinates[0])];
    default:
      prevX = parseInt(nodeCoordinates[0]);
      prevY = parseInt(nodeCoordinates[1]);
      return [parseInt(nodeCoordinates[0]), parseInt(nodeCoordinates[1])];
  }
};

const createLineCoordinatesProps = (pathString: string): TLineCoordinateProps[] =>
  pathString
    .split(/(?=[A-Z])/)
    .filter((s) => !!getPathType(s))
    .map((str) => ({
      type: getPathType(str) as string,
      x: getCoordinates(str)[0],
      y: getCoordinates(str)[1],
    }));


export default createLineCoordinatesProps;
// Separate by A-Z keeping the delimiter -> https://pineco.de/snippets/split-strings-and-keep-the-delimiter/
