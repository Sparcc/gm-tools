import { Monster } from '../../monster-gen.model';
export interface TemplateItem {
  id: string;
  name: string;
  description: string;
  presetMonster: Monster;
  feats: {}[];
}

export class Templates {
  selectedTemplates: string[];
  pageMode: string; // 'picker' | 'list'
  readonly templatesRef: TemplateItem[] = [

  ];
}