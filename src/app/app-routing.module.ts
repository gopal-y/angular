import { AdvancedComponent } from './advanced/advanced.component';
import { MediumComponent } from './medium/medium.component';
import { BasicComponent } from './basic/basic.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'basic', component: BasicComponent},
  { path: 'medium', component: MediumComponent},
  { path: 'advanced', component: AdvancedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
