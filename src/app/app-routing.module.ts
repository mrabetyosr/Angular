import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ResidencesComponent } from './Residence/residences/residences.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './Residence/residence-details/residence-details.component';
import { AddResidenceComponent } from './Residence/add-residence/add-residence.component';  // Import AddResidenceComponent
import { ApartmentsComponent } from './Apartments/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './Apartments/apartments-by-residence/apartments-by-residence.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  {
    path: 'residences',
    component: ResidencesComponent
  },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'apartments-by-residence/:residenceId', component: ApartmentsByResidenceComponent },
  
  // Route for adding a new residence
  { path: 'residences/add-residence', component: AddResidenceComponent },
  
  { path: 'residences/:id', component: ResidenceDetailsComponent },
  
  // Wildcard route for undefined paths
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
