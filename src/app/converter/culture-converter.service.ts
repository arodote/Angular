import { Injectable } from '@angular/core';
import { CultureConverter } from './culture-converter';

@Injectable({
  providedIn: 'root'
})
export class CultureConverterService implements CultureConverter {
  sourceCulture: string;
  targetCulture: string;
  convertDistance: (source: number) => number;
  convertTemperature: (source: number) => number;
  constructor() {}
 }

