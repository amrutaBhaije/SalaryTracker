import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DataService } from '../../data.service';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  public addList: FormGroup;
  public submitted: boolean;
  records = [];
  public getAmt = 0;
  public spendAmt = 0;
  public remaningAmt = 0;
  constructor(
    private formBuilder: FormBuilder,
    private dataservice: DataService
  ) {}

  ngOnInit() {
    this.addList = this.formBuilder.group({
      month: ['', Validators.required],
      year: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    const data = {
      month: parseInt(this.addList.value.month),
      year: parseInt(this.addList.value.year),
    };
    this.dataservice.getData(data).subscribe((res: any[]) => {
      this.records = res;
      this.records.map((val) => {
        if (val.doc.amountPurpose === 'income') {
          this.getAmt = this.getAmt + val.doc.amount;
        } else {
          this.spendAmt = this.spendAmt + val.doc.amount;
        }
      });
      this.remaningAmt = this.getAmt - this.spendAmt;
    });
  }

  public errorHandling = (control: string, error: string) => {
    return this.addList.controls[control].hasError(error);
  };
}
