import { Injectable } from '@angular/core';
import { ScaleMatrix } from './monster-gen.model';

@Injectable({
  providedIn: 'root'
})
export class MonsterGeneratorService {
  public scaleMatrix: ScaleMatrix;

  constructor() {
    
  }
}
