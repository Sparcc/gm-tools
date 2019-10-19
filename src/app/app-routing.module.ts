import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "monster-generator",
    loadChildren:
      "./monster-generator/monster-generator.module#MonsterGeneratorPageModule"
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "monster-generator",
    children: [
      {
        path: '',
      loadChildren: "./monster-generator/monster-generator.module#MonsterGeneratorPageModule"
      },
      {path: 'build-monster',
      loadChildren: "./monster-generator/build-monster/build-monster.module#BuildMonsterPageModule"
    }
      
    ]
      
  },
  {
    path: "npc-management",
    loadChildren:
      "./npc-management/npc-management.module#NpcManagementPageModule"
  },
  {
    path: "build-monster",
    loadChildren:
      "./monster-generator/build-monster/build-monster.module#BuildMonsterPageModule"
  },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
