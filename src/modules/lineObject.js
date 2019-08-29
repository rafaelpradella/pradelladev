class LineObject {
  constructor(mapId) {
    this.pastX = 0
    this.pastY = 0;
    this.mapId = mapId;
    this.pathEl = document.querySelectorAll(`#${this.mapId}`)[0];

    return {
      value: this.createLineObject(),
      el: this.pathEl
    };
  }

  createLineObject() {
    
    let lineObject = [];
    const segmentedPath = this.separatePathBySegments();

    segmentedPath.forEach(str => {
      lineObject.push({
        type: this.getPathType(str),
        x: this.getCoordenates(str)[0],
        y: this.getCoordenates(str)[1]
      });
    });
    return lineObject;
  }

  getPathType(str) {
    const getLetters = /[A-Z]/;
    return getLetters.exec(str)[0];
  }

  getCoordenates(str) {
    const coordenatesList = [];
    const pathType = this.getPathType(str);
    let nodeCoordenates = str.replace(pathType, "").split(" ");

    switch (pathType) {
      case "h":
      case "H":
        coordenatesList.push(nodeCoordenates[0], this.pastY);
        this.pastX = nodeCoordenates[0];
        break;
      case "v":
      case "V":
        coordenatesList.push(this.pastX, nodeCoordenates[0]);
        this.pastY = nodeCoordenates[0];
        break;
      default:
        coordenatesList.push(nodeCoordenates[0], nodeCoordenates[1]);
        this.pastX = nodeCoordenates[0];
        this.pastY = nodeCoordenates[1];
    }
    return coordenatesList;
  }

  separatePathBySegments() {
    const pathContent = this.pathEl.getAttributeNode("d").value;
    return pathContent.split(/(?=[A-Z])/);
  }
}
export default LineObject;

// Separate by A-Z keeping the delimiter -> https://pineco.de/snippets/split-strings-and-keep-the-delimiter/
