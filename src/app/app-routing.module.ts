import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from '././pages/forms/forms.component';
import { ListingComponent } from '././pages/listing/listing.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'list',
    component: ListingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
