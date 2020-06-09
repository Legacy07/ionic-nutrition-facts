import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastrModule } from "ngx-toastr";
import { IonicModule } from "@ionic/angular";
import { MenuButtonComponent } from 'src/app/nav/menu-button/menu-button.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [MenuButtonComponent],
  imports: [CommonModule, FormsModule, ToastrModule, IonicModule, HttpClientModule, RouterModule, IonicStorageModule],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    MenuButtonComponent,
    IonicStorageModule,
  ]
})
export class SharedModule {}
