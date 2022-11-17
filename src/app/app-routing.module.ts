import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WastesComponent } from './wastes/wastes.component';
import { WasteDetailComponent } from './waste-detail/waste-detail.component';
import { WasteAddComponent } from './waste-add/waste-add.component';
import { WasteEditComponent } from './waste-edit/waste-edit.component';
import { AuthentificationComponent } from './authentification/authentification.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthentificationComponent,
    data: { title: 'List of Wastes' }
  },
  {
    path: 'wastes',
    component: WastesComponent,
    data: { title: 'List of Wastes' }
  },
  {
    path: 'waste-details/:id',
    component: WasteDetailComponent,
    data: { title: 'Waste Details' }
  },
  {
    path: 'waste-add',
    component: WasteAddComponent,
    data: { title: 'Add Waste' }
  },
  {
    path: 'waste-edit/:id',
    component: WasteEditComponent,
    data: { title: 'Edit Waste' }
  },
  { path: '',
    redirectTo: '/wastes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
