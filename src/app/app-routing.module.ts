import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailViewComponent } from './components/partials/detail-view/detail-view.component';

const routes: Routes = [
  { path: '', component: DetailViewComponent },
  { path: 'employee/:id', component: DetailViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
