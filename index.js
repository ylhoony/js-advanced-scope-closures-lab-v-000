function produceDrivingRange(blockRange) {
  return function calculate(x, y) {
    const blockX = parseInt(x.slice(0, 2));
    const blockY = parseInt(y.slice(0, 2));
    // console.log(typeof blockX, blockY);
    let blockDistance = Math.abs(blockX - blockY);
    let blockDiff = Math.abs(blockRange - blockDistance);
    if (blockRange > blockDistance) {
      return `within range by ${blockDiff}`;
    } else {
      return `${blockDiff} blocks out of range`;
    }
  }
}

function produceTipCalculator(rate) {
  return function calculate(amount) {
    return amount * rate;
  }
}

function createDriver() {
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}
