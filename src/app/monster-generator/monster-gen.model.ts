export interface Range {
  from: number;
  to: number;
}

export class MonsterValueRef {


  readonly rarity = {
    common: {label: 'Common', value: 'common'},
    uncommon: {label: 'Uncommon', value: 'uncommon'},
    rare: {label: 'Rare', value: 'rare'},
    unique: {label: 'Unique', value: 'unique'}
  };

  readonly alignment = [
    ['LG', 'NG', 'CG'],
    ['LN', 'N', 'CN'],
    ['LE', 'NE', 'CE']
  ];

  // 1 - 24 ability mod +
  readonly abilityMod = [
    [-1, undefined, 3, 2, 0],
    [0, undefined, 3, 2, 0],
    [1, 5, 4, 3, 1],
    [2, 5, 4, 3, 1],
    [3, 5, 4, 3, 1],
    [4, 6, 5, 3, 2],
    [5, 6, 5, 4, 2],
    [6, 7, 5, 4, 2],
    [7, 7, 6, 4, 2],
    [8, 7, 6, 4, 3],
    [9, 7, 6, 4, 3],
    [10, 8, 7, 5, 3],
    [11, 8, 7, 5, 3],
    [12, 8, 7, 5, 4],
    [13, 9, 8, 5, 4],
    [14, 9, 8, 5, 4],
    [15, 9, 8, 6, 4],
    [16, 10, 9, 6, 5],
    [17, 10, 9, 6, 5],
    [18, 10, 9, 6, 5],
    [19, 11, 10, 6, 5],
    [20, 11, 10, 7, 6],
    [21, 11, 10, 7, 6],
    [22, 11, 10, 8, 6],
    [23, 11, 10, 8, 6],
    [24, 13, 12, 9, 7]
  ];

  // 1 - 24 perception mod +
  readonly perception = [
    [-1, 9, 8, 5, 2, 0],
    [0, 10, 9, 6, 3, 1],
    [1, 11, 10, 7, 4, 2],
    [2, 12, 11, 8, 5, 3],
    [3, 14, 12, 9, 6, 4],
    [4, 15, 14, 11, 8, 6],
    [5, 17, 15, 12, 9, 7],
    [6, 18, 17, 14, 11, 8],
    [7, 20, 18, 15, 12, 10],
    [8, 21, 19, 16, 13, 11],
    [9, 23, 21, 18, 15, 12],
    [10, 24, 22, 19, 16, 14],
    [11, 26, 24, 21, 18, 15],
    [12, 27, 25, 22, 19, 16],
    [13, 29, 26, 23, 20, 18],
    [14, 30, 28, 25, 22, 19],
    [15, 32, 29, 26, 23, 20],
    [16, 33, 30, 28, 25, 22],
    [17, 35, 32, 29, 26, 23],
    [18, 36, 33, 30, 27, 24],
    [19, 38, 35, 32, 29, 26],
    [20, 39, 36, 33, 30, 27],
    [21, 41, 38, 35, 32, 28],
    [22, 43, 39, 36, 33, 30],
    [23, 44, 40, 37, 34, 31],
    [24, 46, 42, 38, 36, 32]
  ];

  // 1 - 24 skill mod +
  readonly skills = [
    [-1, 8, 5, 4, 2],
    [0, 9, 6, 5, 3],
    [1, 10, 7, 6, 4],
    [2, 11, 8, 7, 5],
    [3, 13, 10, 9, 7],
    [4, 15, 12, 10, 8],
    [5, 16, 13, 12, 10],
    [6, 18, 15, 13, 11],
    [7, 20, 17, 15, 13],
    [8, 21, 18, 16, 14],
    [9, 23, 20, 18, 16],
    [10, 25, 22, 19, 17],
    [11, 26, 23, 21, 19],
    [12, 28, 25, 22, 20],
    [13, 30, 27, 24, 22],
    [14, 31, 28, 25, 23],
    [15, 33, 30, 27, 25],
    [16, 35, 32, 28, 26],
    [17, 36, 33, 30, 28],
    [18, 38, 35, 31, 29],
    [19, 40, 37, 33, 31],
    [20, 41, 38, 34, 32],
    [21, 43, 40, 36, 34],
    [22, 45, 42, 37, 35],
    [23, 46, 43, 38, 36],
    [24, 48, 45, 40, 38]
  ];

  // 1 - 24 safe items (to determine non overpowered/expensive weapons)
  readonly safeItems = [
    [1, "0"],
    [2, "0"],
    [3, "0"],
    [4, "1"],
    [5, "1"],
    [6, "2 (+1 weapon)"],
    [7, "3"],
    [8, "4 (+1 striking weapon)"],
    [9, "5 (+1 armor)"],
    [10, "6"],
    [11, "7"],
    [12, "8 (+1 resilient armor)"],
    [13, "9"],
    [14, "10 (+2 striking weapon)"],
    [15, "11 (+2 resilient armor)"],
    [16, "12 (+2 greater striking weapon)"],
    [17, "13"],
    [18, "14 (+2 greater resilient armor)"],
    [19, "15"],
    [20, "16 (+3 greater striking weapon)"],
    [21, "17"],
    [22, "18 (+3 greater resilient armor)"],
    [23, "19 (+3 major striking weapon)"],
    [24, "20 (+3 major resilient armor)"]
  ];

  constructor() {}

  getScalingFromLevel(scaleMatrix, level, score){
    let mappedLevel: number;
    mappedLevel = this.getStartingIndexFromLevel(scaleMatrix, level);
    let scaling = scaleMatrix[mappedLevel].slice(1).indexOf(score);
    scaling++
    if (scaling != 0) return scaling;
  }

  getStartingIndexFromLevel(scaleMatrix, level) {
    let mappedLevel: number;
    if (scaleMatrix[0][0] === -1){
      mappedLevel = level + 1;
    } else if (scaleMatrix[0][0] === 1){
      mappedLevel = level - 1;
    } else if (scaleMatrix[0][0] === 1){
      mappedLevel = level;
    } else {
      throw "error trying to map start of scale matrix to an array index";
    }
    return mappedLevel;
  }

  getScalingLabelFromLevelScore(scaleMatrix, level: number, score: number){
    let mappedLevel: number;
    mappedLevel = this.getStartingIndexFromLevel(scaleMatrix, level);
    let scaling = scaleMatrix[mappedLevel].slice(1).indexOf(score);
    scaling++
    if (scaling != 0) return this.getScalingLabel(scaling);
  }

  getScalingLabel(scaling: number){
    switch (scaling){
      case 1:
        return 'Extreme';
      case 2:
        return 'High';
      case 3:
        return 'Moderate';
      case 4:
        return 'Low';
      case 5:
        return 'Terrible';
      case 6:
        return 'Abysmal';
    }
  }

  getAbilityScore(level: number, scaling: number){
    if (scaling === undefined) return this.getAbilityScoreForLevel(level);
    let mappedLevel = level+1; //-1 is 0, 0 is 1
    return this.abilityMod[mappedLevel][scaling];
  }

  getAbilityScoreForLevel(level: number){
    let mappedLevel = level+1; //-1 is 0, 0 is 1
    return this.abilityMod[mappedLevel];
  }

  getPerceptionScore(level: number, scaling: number){
    if (scaling === undefined) return this.getPerceptionScoreForLevel(level);
    let mappedLevel = level+1;
    return this.perception[mappedLevel][scaling];
  }

  getPerceptionScoreForLevel(level: number){
    let mappedLevel = level+1; //-1 is 0, 0 is 1
    return this.perception[mappedLevel];
  }

  getSkillScore(level: number, scaling: number){
    if (scaling === undefined) return this.getSkillScoreForLevel(level);
    let mappedLevel = level+1;
    return this.skills[mappedLevel][scaling];
  }

  getSkillScoreForLevel(level: number){
    let mappedLevel = level+1; //-1 is 0, 0 is 1
    return this.skills[mappedLevel];
  }

  getSafeIItem(level: number){
    let mappedLevel = level-1; //1 is 0, 2 is 0
    return this.safeItems[mappedLevel];
  }

  getRange(scaleMatrix){
    let from = scaleMatrix[0][scaleMatrix[0].length-1]
    let to = scaleMatrix[scaleMatrix.length-1][1];
    to++;
    if (from != undefined && to != undefined){
      let range = {
        from: from, // first terrible
        to: to // last extreme
      }
      return range;
    }
  }
}
