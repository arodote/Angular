import { Injectable } from "@angular/core";
import { ConverterService } from './converter.service';
import { CultureConverter } from './culture-converter';

@Injectable({
  providedIn: "root"
})
export class EuropeConverterService implements CultureConverter {
  sourceCulture = "USA";
  targetCulture = "Europe";
  constructor(private converterService: ConverterService) {}
  convertDistance = this.converterService.fromMilesToKilometers;
  convertTemperature = this.converterService.fromFarenheitToCelsius;
}
