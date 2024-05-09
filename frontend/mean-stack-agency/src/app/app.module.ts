import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { UserModule } from './user/user.module';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProvidersModule } from './providers/providers.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule} from '@angular/common/http';
import { ProvidersComponent } from './providers/providers.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    NotfoundComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    ProvidersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
