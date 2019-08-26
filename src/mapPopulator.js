import LineObject from "./lineObject";

class MapPopulator {
  constructor(args) {
    this.lineId = args.lineId;
    this.path = new LineObject(`PATHL${this.lineId}`);
    this.trainId = 0;
    this.keyframeObj = [];
    this.map = this.path.el;
    this.lineObject = this.path.value;
    this.travelTime = (args.travelTime * 1000) || 50000;
    this.lineTrains = args.lineTrains || 4;
    this.interval = (this.travelTime / this.lineTrains)*2;

    this.createAnimationKeyframe();
    this.populate();
    this.populate();
    this.populateByInterval();
  }

  populate() {   
    this.trainId++
    let elementId = `${this.lineId}-${this.trainId}`;
    let circleTag = `<circle cx="0" cy="0" r="6" class="u-newTrain js-newTrain" data-id="${elementId}" />`;

    this.map.insertAdjacentHTML('afterend', circleTag);
    this.animateTrain(document.querySelector(`.js-newTrain[data-id="${elementId}"]`));
  }

  populateByInterval(){
    let creationInterval = setInterval(() => {   
      if(this.trainId >= this.lineTrains){
        clearInterval(creationInterval);
        return false;
      }
      this.populate();
      this.populate();
    },
    this.interval);
  }

  createAnimationKeyframe(){
    this.lineObject.forEach(segment => {
      this.keyframeObj.push(
        { 
          easing: "cubic-bezier(.3,0,.3,1)",
          transform : `translateX(${segment.x}px) translateY(${segment.y}px)`
        }
      );  
    })
  }

  animateTrain(trainEl) {
    let trainDirection = (this.trainId%2 == 0 ? "alternate-reverse" : "alternate");
    const animationSettings = {
      duration: (this.travelTime),
      fill: "forwards",
      iterations: Infinity,
      direction: trainDirection
    };
    
    let lineAnimation =  new KeyframeEffect(trainEl, this.keyframeObj, animationSettings);
    let animation = new Animation(lineAnimation);
    
    animation.play();

  }
}

export default MapPopulator;
