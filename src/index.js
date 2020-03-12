import "./styles/index.css";
import fs from "fs";
import "web-animations-js/web-animations-next-lite.min.js";
import MapPopulator from "./modules/mapPopulator.js";

const Map = fs.readFileSync(__dirname + "/map.svg", "utf8");
const app = document.querySelector("#app");
app.insertAdjacentHTML('afterBegin', Map);

new MapPopulator({ lineId: 1, travelTime: 60, lineTrains: 12});
new MapPopulator({ lineId: 2, travelTime: 120, lineTrains: 16});
new MapPopulator({ lineId: 3, travelTime: 115, lineTrains: 14});
new MapPopulator({ lineId: 4, travelTime: 80, lineTrains: 10});
new MapPopulator({ lineId: 5, travelTime: 55, lineTrains: 8});
new MapPopulator({ lineId: 6, travelTime: 80, lineTrains: 10});
new MapPopulator({ lineId: 7, travelTime: 90, lineTrains: 12});
new MapPopulator({ lineId: 9, travelTime: 75, lineTrains: 8});
