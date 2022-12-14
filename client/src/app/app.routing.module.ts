import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { ContactComponent } from './contact/contact.component';
import { PermissionsGuard } from './guards/permissions.guard';
import { WithoutSaveGuard } from './guards/without-save.guard';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataResolverService } from './resolvers/data.resolver.service';
import { DetailsComponent } from './users/details/details.component';
import { ListComponent } from './users/list/list.component';
import { UserComponent } from './users/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // {
  //   path: 'contact-reactive',
  //   component: ContactReactiveComponent,
  //   canDeactivate: [WithoutSaveGuard],
  //   resolve: { departments: DataResolverService },
  // },
  {
    path: 'contact-template',
    loadChildren: () =>
      import('./contact-reactive/contact-reactive.module').then(
        (m) => m.ContactReactiveModule
      ),
  },
  { path: 'contact-template/:id', component: ContactComponent },
  {
    path: 'home',
    component: HomeComponent,
    resolve: { departments: DataResolverService },
  },
  {
    path: 'users',
    component: UserComponent,
    canActivate: [PermissionsGuard],
    children: [
      { path: 'list', component: ListComponent },
      { path: 'details', component: DetailsComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
