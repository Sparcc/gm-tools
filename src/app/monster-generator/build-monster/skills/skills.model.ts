export interface SkillItem {
  id: string;
  name: string;
  description: string;
}

export class Skills {
  selectedSkills: string[];
  pageMode: string; // 'picker' | 'list'
  readonly skillsRef: SkillItem[] = [

  ];
}