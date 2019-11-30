export interface TraitItem {
  id: string;
  name: string;
  description: string;
  abilities: string[];
  immunities: string[];
  weaknessess: string[];
}

export class Traits {
  selectedTraits: string[];
  pageMode: string; // 'picker' | 'list'
  readonly traitsRef: TraitItem[] = [

  ];
}