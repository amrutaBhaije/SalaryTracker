import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormComponent implements OnInit {
  public addForm: FormGroup;
  public submitted: boolean;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      amount: ['', Validators.required],
      amountTDS: ['', Validators.required],
      transactionDetails: ['', Validators.required],
      amountPurpose: ['', Validators.required],
      date: ['', Validators.required],
      amountCurrency: ['', Validators.required],
      amounttype: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
  }

  public errorHandling = (control: string, error: string) => {
    return this.addForm.controls[control].hasError(error);
  };
}
