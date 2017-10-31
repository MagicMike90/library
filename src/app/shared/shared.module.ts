import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MessageModule } from './messages/message.module';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { RecentActivityComponent } from './components/recent-activity/recent-activity.component';
import { StatPercentPipe } from './pipes/stat-percent.pipe';
import { AusMapComponent } from './components/aus-map/aus-map.component';
import { BarchartComponent } from './components/barchart/barchart.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FlexLayoutModule,
    MessageModule,
    ChartsModule,
  ],
  exports: [
    FlexLayoutModule,
    MessageModule,

    // export components
    RadarChartComponent,
    RecentActivityComponent,
    AusMapComponent,
    BarchartComponent,

    // export pipes
    StatPercentPipe
  ],
  declarations: [RadarChartComponent, RecentActivityComponent, StatPercentPipe, AusMapComponent, BarchartComponent]
})
export class SharedModule { }
