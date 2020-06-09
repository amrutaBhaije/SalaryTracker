import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { DataService } from '../../data.service'

@Component({
  selector: 'app-product-form',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormComponent implements OnInit {
  public addForm: FormGroup
  public submitted: boolean

  constructor(
    private formBuilder: FormBuilder,
    private dataservice: DataService,
  ) {}

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
    })
  }

  onSubmit() {
    this.submitted = true
    const data = {
      name: this.addForm.value.name,
      amount: this.addForm.value.amount,
      amountTds: this.addForm.value.amountTDS,
      transactionDetail: this.addForm.value.transactionDetails,
      amountPurpose: this.addForm.value.amountPurpose,
      amountType: this.addForm.value.amountType,
      amountCurrency: this.addForm.value.amountCurrency,
      date: this.addForm.value.date,
    }
    this.dataservice
      .sendGetRequest(data)
      .subscribe((res) => console.log('data', res))
  }

  public errorHandling = (control: string, error: string) => {
    return this.addForm.controls[control].hasError(error)
  }
}
