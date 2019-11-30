export interface Range {
  from: number;
  to: number;
}

export class Monster {
  name: string;
  template: {};
  level: number;
  alignment: string;
  abilityMod: {};
  perception: number;
  skills: {}[];
  ac: number;
  hp: number;
  savingThrows: number;
  resistances: number;
  attackBonus: number;
  strikeBonus: number;
  traits: {}[];
}

export class MonsterValueRef {
  readonly rarity = {
    common: { label: "Common", value: "common" },
    uncommon: { label: "Uncommon", value: "uncommon" },
    rare: { label: "Rare", value: "rare" },
    unique: { label: "Unique", value: "unique" }
  };

  readonly alignment = [
    ["LG", "NG", "CG"],
    ["LN", "N", "CN"],
    ["LE", "NE", "CE"]
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

  readonly ac = [
    [-1, 18, 15, 14, 12],
    [0, 19, 16, 15, 13],
    [1, 19, 16, 15, 13],
    [2, 21, 18, 17, 15],
    [3, 22, 19, 18, 16],
    [4, 24, 21, 20, 18],
    [5, 25, 22, 21, 19],
    [6, 27, 24, 23, 21],
    [7, 28, 25, 24, 22],
    [8, 30, 27, 26, 24],
    [9, 31, 28, 27, 25],
    [10, 33, 30, 29, 27],
    [11, 34, 31, 30, 28],
    [12, 36, 33, 32, 30],
    [13, 37, 34, 33, 31],
    [14, 39, 36, 35, 33],
    [15, 40, 37, 36, 34],
    [16, 42, 39, 38, 36],
    [17, 43, 40, 39, 37],
    [18, 45, 42, 41, 39],
    [19, 46, 43, 42, 40],
    [20, 48, 45, 44, 42],
    [21, 49, 46, 45, 43],
    [22, 51, 48, 47, 45],
    [23, 52, 49, 48, 46],
    [24, 54, 51, 50, 48]
  ];

  readonly savingThrows = [
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

  readonly hp = [
    [-1, 9, 3, 2],
    [0, 7, 6, 5],
    [1, 11, 9, 6],
    [2, 16, 12, 9],
    [3, 24, 18, 13],
    [4, 33, 26, 18],
    [5, 43, 33, 24],
    [6, 54, 42, 30],
    [7, 66, 52, 37],
    [8, 79, 62, 45],
    [9, 91, 72, 52],
    [10, 104, 82, 60],
    [11, 116, 92, 67],
    [12, 129, 102, 75],
    [13, 141, 112, 82],
    [14, 154, 122, 90],
    [15, 166, 132, 97],
    [16, 179, 142, 105],
    [17, 191, 152, 112],
    [18, 204, 162, 120],
    [19, 216, 172, 127],
    [20, 229, 182, 135],
    [21, 243, 193, 143],
    [22, 260, 206, 153],
    [23, 279, 221, 164],
    [24, 301, 238, 176]
  ];

  readonly atkBonus = [
    [-1, 10, 8, 6, 4],
    [0, 10, 8, 6, 4],
    [1, 11, 9, 7, 5],
    [2, 13, 11, 9, 7],
    [3, 14, 12, 10, 8],
    [4, 16, 14, 12, 9],
    [5, 17, 15, 13, 11],
    [6, 19, 17, 15, 12],
    [7, 20, 18, 16, 13],
    [8, 22, 20, 18, 15],
    [9, 23, 21, 19, 16],
    [10, 25, 23, 21, 17],
    [11, 27, 24, 22, 19],
    [12, 28, 26, 24, 20],
    [13, 29, 27, 25, 21],
    [14, 31, 29, 27, 23],
    [15, 32, 30, 28, 24],
    [16, 34, 32, 30, 25],
    [17, 35, 33, 31, 27],
    [18, 37, 35, 33, 28],
    [19, 38, 36, 34, 29],
    [20, 40, 38, 36, 31],
    [21, 41, 39, 37, 32],
    [22, 43, 41, 39, 33],
    [23, 44, 42, 40, 35],
    [24, 46, 44, 42, 36]
  ];

  readonly strikeBonus = [
    ["-1", "1d6+1 (4)", "1d4+1 (3)", "1d4 (3)", "1d4 (2)"],
    ["0", "1d6+3 (6)", "1d6+2 (5)", "1d4+2 (4)", "1d4+1 (3)"],
    ["1", "1d8+4 (8)", "1d6+3 (6)", "1d6+2 (5)", "1d4+2 (4)"],
    ["2", "1d12+4 (11)", "1d10+4 (9)", "1d8+4 (8)", "1d6+3 (6)"],
    ["3", "1d12+8 (15)", "1d10+6 (12)", "1d8+6 (10)", "1d6+5 (8)"],
    ["4", "2d10+7 (18)", "2d8+5 (14)", "2d6+5 (12)", "2d4+4 (9)"],
    ["5", "2d12+7 (20)", "2d8+7 (16)", "2d6+6 (13)", "2d4+6 (11)"],
    ["6", "2d12+10 (23)", "2d8+9 (18)", "2d6+8 (15)", "2d4+7 (12)"],
    ["7", "2d12+12 (25)", "2d10+9 (20)", "2d8+8 (17)", "2d6+6 (13)"],
    ["8", "2d12+15 (28)", "2d10+11 (22)", "2d8+9 (18)", "2d6+8 (15)"],
    ["9", "2d12+17 (30)", "2d10+13 (24)", "2d8+11 (20)", "2d6+9 (16)"],
    ["10", "2d12+20 (33)", "2d12+13 (26)", "2d10+11 (22)", "2d6+10 (17)"],
    ["11", "2d12+22 (35)", "2d12+15 (28)", "2d10+12 (23)", "2d8+10 (19)"],
    ["12", "3d12+19 (38)", "3d10+14 (30)", "3d8+12 (25)", "3d6+10 (20)"],
    ["13", "3d12+21 (40)", "3d10+16 (32)", "3d8+14 (27)", "3d6+11 (21)"],
    ["14", "3d12+24 (43)", "3d10+18 (34)", "3d8+15 (28)", "3d6+13 (23)"],
    ["15", "3d12+26 (45)", "3d12+17 (36)", "3d10+14 (30)", "3d6+14 (24)"],
    ["16", "3d12+29 (48)", "3d12+18 (37)", "3d10+15 (31)", "3d6+15 (25)"],
    ["17", "3d12+31 (50)", "3d12+19 (38)", "3d10+16 (32)", "3d6+16 (26)"],
    ["18", "3d12+34 (53)", "3d12+20 (40)", "3d10+17 (33)", "3d6+17 (27)"],
    ["19", "4d12+29 (55)", "4d10+20 (42)", "4d8+17 (35)", "4d6+14 (28)"],
    ["20", "4d12+32 (58)", "4d10+22 (44)", "4d8+19 (37)", "4d6+15 (29)"],
    ["21", "4d12+34 (60)", "4d10+24 (46)", "4d8+20 (38)", "4d6+17 (31)"],
    ["22", "4d12+37 (63)", "4d10+26 (48)", "4d8+22 (40)", "4d6+18 (32)"],
    ["23", "4d12+39 (65)", "4d12+24 (50)", "4d10+20 (42)", "4d6+19 (33)"],
    ["24", "4d12+42 (68)", "4d12+26 (52)", "4d10+22 (44)", "4d6+21 (35)"]
  ];

  constructor() {}

  getScalingFromLevel(scaleMatrix, level, score) {
    let mappedLevel: number;
    mappedLevel = this.getStartingIndexFromLevel(scaleMatrix, level);
    let scaling = scaleMatrix[mappedLevel].slice(1).indexOf(score);
    scaling++;
    if (scaling != 0) return scaling;
  }

  getStartingIndexFromLevel(scaleMatrix, level) {
    let mappedLevel: number;
    if (scaleMatrix[0][0] === -1) {
      mappedLevel = level + 1;
    } else if (scaleMatrix[0][0] === 1) {
      mappedLevel = level - 1;
    } else if (scaleMatrix[0][0] === 1) {
      mappedLevel = level;
    } else {
      throw "error trying to map start of scale matrix to an array index";
    }
    return mappedLevel;
  }

  getScalingLabelFromLevelScore(scaleMatrix, level: number, score: number) {
    let mappedLevel: number;
    mappedLevel = this.getStartingIndexFromLevel(scaleMatrix, level);
    let scaling = scaleMatrix[mappedLevel].slice(1).indexOf(score);
    scaling++;
    if (scaling != 0) return this.getScalingLabel(scaling);
  }

  getScalingLabel(scaling: number) {
    switch (scaling) {
      case 1:
        return "Extreme";
      case 2:
        return "High";
      case 3:
        return "Moderate";
      case 4:
        return "Low";
      case 5:
        return "Terrible";
      case 6:
        return "Abysmal";
    }
  }

  // Generic
  getMatrixScore(scaleMatrix, level: number, scaling: number) {
    if (scaling === undefined)
      return this.getMatrixScoreForLevel(scaleMatrix, level);
    let mappedLevel = level + 1; //-1 is 0, 0 is 1
    return scaleMatrix[mappedLevel][scaling];
  }

  // Generic
  getMatrixScoreForLevel(scaleMatrix, level: number) {
    let mappedLevel = level + 1; //-1 is 0, 0 is 1
    return scaleMatrix[mappedLevel];
  }

  getAbilityScore(level: number, scaling: number) {
    if (scaling === undefined) return this.getAbilityScoreForLevel(level);
    let mappedLevel = level + 1; //-1 is 0, 0 is 1
    return this.abilityMod[mappedLevel][scaling];
  }

  getAbilityScoreForLevel(level: number) {
    let mappedLevel = level + 1; //-1 is 0, 0 is 1
    return this.abilityMod[mappedLevel];
  }

  getPerceptionScore(level: number, scaling: number) {
    if (scaling === undefined) return this.getPerceptionScoreForLevel(level);
    let mappedLevel = level + 1;
    return this.perception[mappedLevel][scaling];
  }

  getPerceptionScoreForLevel(level: number) {
    let mappedLevel = level + 1; //-1 is 0, 0 is 1
    return this.perception[mappedLevel];
  }

  getSkillScore(level: number, scaling: number) {
    if (scaling === undefined) return this.getSkillScoreForLevel(level);
    let mappedLevel = level + 1;
    return this.skills[mappedLevel][scaling];
  }

  getSkillScoreForLevel(level: number) {
    let mappedLevel = level + 1; //-1 is 0, 0 is 1
    return this.skills[mappedLevel];
  }

  getSafeIItem(level: number) {
    let mappedLevel = level - 1; //1 is 0, 2 is 0
    return this.safeItems[mappedLevel];
  }

  getRange(scaleMatrix) {
    let from = scaleMatrix[0][scaleMatrix[0].length - 1];
    let to = scaleMatrix[scaleMatrix.length - 1][1];
    to++;
    if (from != undefined && to != undefined) {
      let range = {
        from: from, // first terrible
        to: to // last extreme
      };
      return range;
    }
  }
}
