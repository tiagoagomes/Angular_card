import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent], // O AppComponent deve estar aqui se não for standalone
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule, // Certifique-se de importar
    MatButtonModule, // Certifique-se de importar
    MatToolbarModule, // Certifique-se de importar
    BrowserAnimationsModule // Importação essencial para funcionamento do Angular Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
