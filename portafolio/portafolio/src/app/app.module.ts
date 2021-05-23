import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SectionAboutComponent } from './section-about/section-about.component';
import { SectionKnowledgeComponent } from './section-knowledge/section-knowledge.component';
import { SectionProjsComponent } from './section-projs/section-projs.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SectionAboutComponent,
    SectionKnowledgeComponent,
    SectionProjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,FormsModule,
    MatListModule,
    MatGridListModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
