import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormBuilder } from '@angular/forms';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as moment from 'moment';


@Component({
  selector: 'app-widget-toolbar',
  templateUrl: './widget-toolbar.component.html',
  styleUrls: ['./widget-toolbar.component.css']
})
export class WidgetToolbarComponent implements OnInit {
  favoriteSeason: string;
  selectedPeriod: string;
  selectedStartDate = new FormControl(new Date());
  selectedEndDate = new FormControl(new Date());

  filterForm: FormGroup;

  formValues = {
    startDate: '',
    endDate: '',
  };
  periods = [
    { value: 'daily', viewValue: 'Today' },
    { value: 'weekly', viewValue: 'This Week' },
    { value: 'monthly', viewValue: 'This Month' },
    { value: 'yearly', viewValue: 'This Year' }
  ];
  events: string[] = [];

  constructor(private fb: FormBuilder) {
    this.filterForm = fb.group({
      selectedPeriod: '',
      selectedStartDate: moment().format(),
      selectedEndDate: moment().format()
    });

    this.filterForm.valueChanges.subscribe(data => {
      // switch (data.selectedPeriod) {
      //   case 'daily':
      //     this.filterForm.controls['selectedStartDate'].setValue(moment().format());
      //     this.filterForm.controls['selectedEndDate'].setValue(moment().format());
      //     break;
      //   case 'weekly':
      //     break;
      //   case 'monthly':
      //     break;
      //   case 'yearly':
      //     break;
      // }
      // if (data.selectedPeriod === 'daily') {
      //   this.filterForm.controls['selectedStartDate'].setValue(moment().format());
      //   this.filterForm.controls['selectedEndDate'].setValue(moment().format());
      // }

      if (data.selectedStartDate instanceof moment) {
        this.formValues.startDate = data.selectedStartDate.toISOString();
      }
      if (data.selectedEndDate instanceof moment) {
        this.formValues.endDate = data.selectedEndDate.toISOString();
      }
    });

  }

  ngOnInit() {
  }

  // addStartEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   this.events.push(`${type}: ${event.value}`);
  //   this.selectedPeriod = event.value;
  // }
  // addEndEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   this.events.push(`${type}: ${event.value}`);
  // }
}
