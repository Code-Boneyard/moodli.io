import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  templateUrl: './tenant-settings.component.html',
})
export class TenantSettingsComponent implements OnInit {
  panelOpenState = false;
  exampleField: FormControl = this.fb.control("");
  exampleFormGroup: FormGroup;

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'SFO Terminal 3 West Modernization' },
    { value: 'pizza-1', viewValue: 'SF Crime Lab' },
    { value: 'tacos-2', viewValue: 'Facebook MPK 61 & 62' }
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.exampleFormGroup = this.fb.group({
      exampleField: '',
    });
  }

}
