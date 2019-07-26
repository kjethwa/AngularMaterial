import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../shared/material.module';

import { DemoRoutingModule } from './demo-routing.module';
import {ButtonsComponent} from './buttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [
    ButtonsComponent,
    FlexboxComponent
  ]
})
export class DemoModule { }
