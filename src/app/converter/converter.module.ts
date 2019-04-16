import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConverterRoutingModule } from './converter-routing.module';
import { ConverterComponent } from './converter/converter.component';
import { FormsModule } from '@angular/forms';
import { CultureConverterComponent } from './culture-converter/culture-converter.component';
import { UsaConverterService } from './usa-converter.service';
import { CultureConverterService } from './culture-converter.service';
import { EuropeConverterService } from './europe-converter.service';
import { ConverterService } from './converter.service';
import { environment } from 'src/environments/environment';

const cultureFactory = (converterService: ConverterService) => {
  if (environment.unitsCulture === 'metric') {
  return new EuropeConverterService(converterService);
  } else {
  return new UsaConverterService(converterService);
  }
 };

@NgModule({
  declarations: [ConverterComponent, CultureConverterComponent],
  imports: [
    CommonModule,
    ConverterRoutingModule, FormsModule
  ],
  providers: [
    {
      provide: CultureConverterService,
      useFactory: cultureFactory,
      deps: [ConverterService]
      }
    ]

})
export class ConverterModule { }
