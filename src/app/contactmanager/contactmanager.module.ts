import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import {ContactmanagerAppComponent} from './contactmanager-app.component';

const routes: Routes = [
  {
    path: '', component: ContactmanagerAppComponent,
    children: [{path: '', component: MainContentComponent}]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SidenavComponent, ToolbarComponent, MainContentComponent, ContactmanagerAppComponent]
})
export class ContactmanagerModule { }
