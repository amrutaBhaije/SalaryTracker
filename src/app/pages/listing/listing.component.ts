import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  public addList: FormGroup;
  public submitted: boolean;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addList = this.formBuilder.group({
      month: ['', Validators.required],
      year: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
  }

  public errorHandling = (control: string, error: string) => {
    return this.addList.controls[control].hasError(error);
  };
}
