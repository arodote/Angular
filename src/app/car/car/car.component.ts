import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-car",
  templateUrl: "./car.component.html",
  styles: []
})
export class CarComponent implements OnInit {
  public car: any;
  public disableBrake: boolean;
  public disableThrottle: boolean;
  constructor() {}
  public ngOnInit() {
    this.car = { name: "Ferrari", maxSpeed: 350, currentSpeed: 0 };
    this.checkLimits();
  }
  private checkLimits() {
    this.disableBrake = false;
    this.disableThrottle = false;
    if (this.car.currentSpeed <= 0) {
      this.car.currentSpeed = 0;
      this.disableBrake = true;
    } else if (this.car.currentSpeed >= this.car.maxSpeed) {
      this.car.currentSpeed = this.car.maxSpeed;
      this.disableThrottle = true;
    }
  }
  public onBrake(drive: number) {
    this.car.currentSpeed -= this.getDelta(drive);
    this.checkLimits();
  }
  public onThrottle(drive: number) {
    this.car.currentSpeed += this.getDelta(drive);
    this.checkLimits();
  }
  private getDelta = (drive: number) =>
    drive + (this.car.maxSpeed - this.car.currentSpeed) / 4;
}
