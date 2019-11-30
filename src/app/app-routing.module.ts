import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "monster-generator", pathMatch: "full" },
  {
    path: "monster-generator",
    loadChildren:
      "./monster-generator/monster-generator.module#MonsterGeneratorPageModule"
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
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'templates', loadChildren: './monster-generator/build-monster/templates/templates.module#TemplatesPageModule' },
  { path: 'traits', loadChildren: './monster-generator/build-monster/traits/traits.module#TraitsPageModule' },
  { path: 'skills', loadChildren: './monster-generator/build-monster/skills/skills.module#SkillsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
