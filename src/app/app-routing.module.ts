import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichaClinicaComponent } from './component/ficha-clinica/ficha-clinica.component';
import { HomeComponent } from './component/home/home.component';
import { ProfsCrudComponent } from './component/profs-crud/profs-crud.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'profs', component: ProfsCrudComponent  },
  { path: 'fichc', component: FichaClinicaComponent  },
  { path: '**', redirectTo: '', pathMatch: 'full' }, //toda direccion 404 va a home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
