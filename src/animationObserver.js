class AnimationObserver {
  constructor(animation) {
    this.animation = animation;
    this.observerConfig = {
        rootMargin: "50vh 0px",
        threshold: 0.01
    };
  }
};