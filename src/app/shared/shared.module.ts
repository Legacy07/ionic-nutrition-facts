import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastrModule } from "ngx-toastr";
import { IonicModule } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { SidebarComponent } from 'src/app/nav/sidebar/sidebar.component';
import { MenuButtonComponent } from 'src/app/nav/menu-button/menu-button.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MenuButtonComponent],
  imports: [CommonModule, FormsModule, ToastrModule, IonicModule, HttpClientModule, RouterModule],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    MenuButtonComponent
  ]
})
export class SharedModule {}
