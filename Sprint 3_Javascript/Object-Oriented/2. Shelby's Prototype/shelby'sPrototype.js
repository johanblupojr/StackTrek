class odometer {
  constructor(diameter, rotation) {
    this.diameter = diameter;
    this.rotation = rotation;
  }

  circumference() {
    const radius = this.diameter / 2;
    const circumference = 2 * Math.PI * radius;
    return parseFloat(circumference.toFixed(2));
  }

  calculate() {
    const wheelCircumference = this.circumference() * 0.0254;
    const distance = this.rotation * wheelCircumference;
    const distanceInKm = distance / 1000;
    const distanceString = distanceInKm
      .toFixed()
      .padStart(6, "0")
      .split("")
      .map((num) => `[${num}]`)
      .join("");
    return distanceString;
  }
}
const tireDiameter = 19; // inches
const wheelRotations = 457752;

const myodometer = new odometer(tireDiameter, wheelRotations);
const circumference = myodometer.circumference();
const traveledDistance = myodometer.calculate();

console.log("Result Circumference:", circumference);
console.log("Result Traveled Distance:", traveledDistance, "Km");
