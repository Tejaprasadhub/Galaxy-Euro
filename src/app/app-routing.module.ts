import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import { DharmaadikaritvaComponent } from './components/dharmaadikaritva/dharmaadikaritva.component';
import { AntarastriyaComponent } from './components/antarastriya/antarastriya.component';
import { ManavaComponent } from './components/manava/manava.component';
import { UttaraditvaComponent } from './components/uttaraditva/uttaraditva.component';
import { JanapadaSevaComponent } from './components/janapada-seva/janapada-seva.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about-company", component: AboutCompanyComponent },
  { path: 'dharmaadikaritva', component: DharmaadikaritvaComponent },
  { path: 'antarastriya', component: AntarastriyaComponent },
  { path: 'manava', component: ManavaComponent },
  { path: 'uttaraditva', component: UttaraditvaComponent },
  { path: 'janapada-seva', component: JanapadaSevaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
