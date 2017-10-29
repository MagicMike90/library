import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {
  MatCardModule,
  MatProgressBarModule,
  MatListModule,
  MatIconModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MessageModule } from './messages/message.module';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { RecentActivityComponent } from './components/recent-activity/recent-activity.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';
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
    MatCardModule,
    MatProgressBarModule,
    MatListModule,
    MatIconModule,
  ],
  exports: [
    FlexLayoutModule,
    MessageModule,

    // export components
    RadarChartComponent,
    RecentActivityComponent,
    StatsCardComponent,
    AusMapComponent,
    BarchartComponent,

    // export pipes
    StatPercentPipe
  ],
  declarations: [RadarChartComponent, RecentActivityComponent, StatsCardComponent, StatPercentPipe, AusMapComponent, BarchartComponent]
})
export class SharedModule { }
