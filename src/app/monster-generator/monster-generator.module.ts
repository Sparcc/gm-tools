import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MonsterGeneratorPage } from './monster-generator.page';

const routes: Routes = [
  {
    path: '',
    component: MonsterGeneratorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MonsterGeneratorPage]
})
export class MonsterGeneratorPageModule {}
