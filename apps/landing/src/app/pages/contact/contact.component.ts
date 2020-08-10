import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  contactFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactFormGroup = this.fb.group({
      firstName: '',
      lastName: '',
      title: '',
      company: '',
      industry: '',
      email: '',
      phone: '',
      comments: '',
      newsletter: '',
    });
  }

}
