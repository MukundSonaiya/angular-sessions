import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDashboardComponent } from './components/hero-dashboard/hero-dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard', 
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroListComponent,
  },
  {
    path: 'dashboard',
    component: HeroDashboardComponent,
  },
  {
    path: 'detail',
    component: HeroDetailComponent,
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
