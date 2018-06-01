import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from './form-user/form-user.component';
import { TableUserComponent } from './table-user/table-user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormUserComponent, TableUserComponent]
})
export class UsuarioModule { }
