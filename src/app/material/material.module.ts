import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from'@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule
  ],
  exports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule
  ]
})
export class MaterialModule { }
