import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardPage } from "./dashboard.page";

const routes: Routes = [
  {
    path: "",
    component: DashboardPage,
    children: [
      {
        path: "",
        redirectTo: "diary",
        pathMatch: "full",
      },
      {
        path: "diary",
        loadChildren: () =>
          import("./diary/diary.module").then((m) => m.DiaryPageModule),
      },
      {
        path: "foods",
        loadChildren: () =>
          import("./foods/foods.module").then((m) => m.FoodsPageModule),
      },
      {
        path: "settings",
        loadChildren: () =>
          import("./settings/settings.module").then(
            (m) => m.SettingsPageModule
          ),
      },
      {
        path: "admin",
        loadChildren: () =>
          import("./admin/admin.module").then((m) => m.AdminPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
