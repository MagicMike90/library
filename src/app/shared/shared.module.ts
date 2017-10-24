import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {
  MatCardModule,
  MatProgressBarModule,
  MatListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MessageModule } from './messages/message.module';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { RecentActivityComponent } from './components/recent-activity/recent-activity.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';
import { StatPercentPipe } from './pipes/stat-percent.pipe';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FlexLayoutModule,
    MessageModule,
    ChartsModule,
    MatCardModule,
    MatProgressBarModule,
    MatListModule
  ],
  exports: [
    MessageModule,
    RadarChartComponent,
    RecentActivityComponent,
    StatsCardComponent,
    FlexLayoutModule,

    StatPercentPipe
  ],
  declarations: [RadarChartComponent, RecentActivityComponent, StatsCardComponent, StatPercentPipe]
})
export class SharedModule { }
