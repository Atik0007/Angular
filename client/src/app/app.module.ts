import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { FormNewItemComponent } from './form-new-item/form-new-item.component';
import { CitiesComponent } from './cities/cities.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './users/user/user.component';
import { DetailsComponent } from './users/details/details.component';
import { ListComponent } from './users/list/list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormNewItemComponent,
    CitiesComponent,
    FilterPipe,
    ContactComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    UserComponent,
    DetailsComponent,
    ListComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
