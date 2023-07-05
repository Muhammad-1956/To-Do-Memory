import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddMemoryComponent } from './components/add-memory/add-memory.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MemoryComponent } from './components/memory/memory.component';
import { HomeComponent } from './components/home/home.component';

let paths: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add-memory', component: AddMemoryComponent},
  {path: 'memory', component: MemoryComponent},
  {path: 'memory/:id', component: MemoryComponent},
  {path: '**', component: NotFoundComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddMemoryComponent,
    MemoryComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(paths, {
    initialNavigation: 'enabledBlocking'
}),
    FormsModule
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
