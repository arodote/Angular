import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ConverterService {
  constructor() {}
  public fromKilometersToMiles = kilometers => kilometers * 0.62137;
  public fromMilesToKilometers = miles => miles * 1.609;
  public fromCelsiusToFarenheit = celsius => celsius * (9 / 5) + 32;
  public fromFarenheitToCelsius = farenheit => (farenheit - 32) * (5 / 9);
}
