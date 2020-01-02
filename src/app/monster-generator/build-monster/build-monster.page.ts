import { Component, OnInit} from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions, PickerColumnOption } from '@ionic/core';
import { MonsterValueRef, Range } from '../monster-gen.model';
import {ModifierPipe} from './monster-form-functions.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-build-monster',
  templateUrl: './build-monster.page.html',
  styleUrls: ['./build-monster.page.scss'],
})
export class BuildMonsterPage implements OnInit {
  // Form
  form: FormGroup;

  // Alignment
  selectedAlignment;
  defaultAlignment;
  expandAlignmentPicker;

  // Template
  selectedTemplate;
  defaultTemplateIdx;

  // Default picker for testing
  selectedPickerValue;

  // Level - Determines default values calculated from gererateOptions
  selectedLevel;

  selectedSkill = {};

  selectedAbilityMod = {};
  abilityModDef = {}

  defaultAbilityModIdx;
  selectedPerception;
  defaultPerceptionIdx;

  selectedAC;
  defaultACIdx;

  selectedHP;
  defaultHPIdx;

  selectedSavingThrows;
  defaultSavingThrowsIdx;

  selectedResistances;
  defaultResistancesIdx;

  selectedWeaknesses;
  defaultWeaknessesIdx;

  selectedAtkBonus;
  defaultAtkBonusIdx;

  selectedStrikeBonus;
  defaultStrikeBonusIdx;
  
  monRef = new MonsterValueRef();

  constructor(private pickerCtrl: PickerController) {
    this.selectedLevel = { text: '1', value: 1 };
    this.expandAlignmentPicker = false;
  }

  ngOnInit() {
    this.form = new FormGroup({
      perceptionNotes: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.maxLength(100)]
      }),
      ACNotes: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.maxLength(100)]
      }),
      HPNotes: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.maxLength(100)]
      })
    });
  }

  async levelPicker() {
    var options = [
      { text: '1', value: 1 },
      { text: '2', value: 2 },
      { text: '3', value: 3 },
      { text: '4', value: 4 },
      { text: '6', value: 6 },
      { text: '7', value: 7 },
      { text: '8', value: 8 },
      { text: '9', value: 9 },
      { text: '10', value: 10 },
      { text: '11', value: 11 },
      { text: '12', value: 12 },
      { text: '13', value: 13 },
      { text: '14', value: 14 },
      { text: '15', value: 15 },
      { text: '16', value: 16 },
      { text: '17', value: 17 },
      { text: '18', value: 18 },
      { text: '19', value: 19 },
      { text: '20', value: 20 },
      { text: '21', value: 21 },
      { text: '22', value: 22 },
      { text: '23', value: 23 },
      { text: '24', value: 24 }
    ];
    this.selectedLevel = await this.customPicker(options, null);
    /* this.customPicker(options).then(res => {
      this.selectedLevel = res;
      console.log(this.selectedLevel);
     }); */
    
  }

  pickAlignment(value: string) {
    this.toggleAlignmentPickerExpansion();
    
    this.selectedAlignment = value;
  }

  toggleAlignmentPickerExpansion(){
    /* this.expandAlignmentPicker = (this.expandAlignmentPicker) ? false : true;
    this.expandAlignmentPicker = (!this.expandAlignmentPicker) ? true : false;  */
    if (this.expandAlignmentPicker == true){
      this.expandAlignmentPicker = false;
    }else {
      this.expandAlignmentPicker = true;
    }
    console.log('Alignment picker expanded=',this.expandAlignmentPicker);
  }

  async skillPicker(skill: string) {
    let scaleMatrix = this.monRef.skills;
    //this.selectedSkill = await this.customPicker(options);
    this.selectedSkill[skill] = await this.customPicker(this.generateOptions(scaleMatrix, null, null, false), null);

  }

  async perceptionPicker() {
    let scaleMatrix = this.monRef.perception;

    this.selectedPerception = await this.customPicker(this.generateOptions(scaleMatrix, 'defaultTemplateIdx', null, true), this.defaultTemplateIdx);

    /*
    // Example using .then
    this.customPicker(options).then((selected) => {
      this.selectedPerception = selected;
    }); */
    
    
  }

  async abilityModPicker(ability: string) {
    let scaleMatrix = this.monRef.abilityMod;
    let optionsInit = [
      { text: '-10', value: -10 },
      { text: '-9', value: -9 },
      { text: '-8', value: -8 },
      { text: '-7', value: -7 },
      { text: '-6', value: -6 },
      { text: '-4', value: -4 },
      { text: '-3', value: -3 },
      { text: '-2', value: -2 },
      { text: '-1', value: -1 }
    ];
    let defaultIdxOffset = optionsInit.length;

    let options = this.generateOptions(scaleMatrix, 'abilityModDef', ability, false);
    for (var e in options){
      optionsInit.push(options[e]); 
    }
    let defaultIdx = (this.abilityModDef[ability]) + defaultIdxOffset;
    this.selectedAbilityMod[ability] = await this.customPicker(optionsInit, defaultIdx);
  }

  async acPicker() {
    let scaleMatrix = this.monRef.ac;
    let options = this.generateOptions(scaleMatrix, 'defaultACIdx', null, false);

    this.selectedAC = await this.customPicker(options, this.defaultACIdx);
  }

  async hpPicker() {
    let scaleMatrix = this.monRef.hp;
    let options = this.generateOptions(scaleMatrix, 'defaultHPIdx', null, false);

    this.selectedHP = await this.customPicker(options, this.defaultHPIdx);
  }

  async savingThrowsPicker() {
    let scaleMatrix = this.monRef.savingThrows;
    let options = this.generateOptions(scaleMatrix, 'defaultSavingThrowsIdx', null, false);

    this.selectedSavingThrows = await this.customPicker(options, this.defaultSavingThrowsIdx);
  }

  async resistancesPicker() {
    let scaleMatrix = this.monRef.savingThrows;
    let options = this.generateOptions(scaleMatrix, 'defaultResistancesIdx', null, false);

    this.selectedResistances = await this.customPicker(options, this.defaultResistancesIdx);
  }

  async weaknessesPicker() {
    let scaleMatrix = this.monRef.savingThrows;
    let options = this.generateOptions(scaleMatrix, 'defaultWeaknessesIdx', null, false);

    this.selectedWeaknesses = await this.customPicker(options, this.defaultWeaknessesIdx);
  }

  async atkBonusPicker() {
    let scaleMatrix = this.monRef.savingThrows;
    let options = this.generateOptions(scaleMatrix, 'defaultAtkBonusIdx', null, false);

    this.selectedAtkBonus = await this.customPicker(options, this.defaultAtkBonusIdx);
  }

  async strikeBonusPicker() {
    let scaleMatrix = this.monRef.savingThrows;
    let options = this.generateOptions(scaleMatrix, 'defaultStrikeBonusIdx', null, false);

    this.selectedStrikeBonus = await this.customPicker(options, this.defaultStrikeBonusIdx);
  }

  generateOptions(scaleMatrixParam,varNameDefValue, varNameDefValueProp, addModifiers: boolean) {
    console.log("Generating Options");
    if (!this.selectedLevel.value) return;
    let options = [];
    let levelIdx = this.selectedLevel.value+1;
    let range: Range;
    let scaleMatrix = scaleMatrixParam;
    range = this.monRef.getRange(scaleMatrix);
    let idx = 0;
    for (let r = range.from; r != range.to; r++){

      // Does this value have a label?
      let scaling = this.monRef.getScalingFromLevel(scaleMatrix,levelIdx,r);
      let scalingLabel = this.monRef.getScalingLabel(scaling);
      //let selected = false;
      
      if (scaling === undefined){
        if (addModifiers){
          options.push({text: '+'+r, value: r});
        } else {
          options.push({text: r, value: r});
        }
        idx++;
        continue
      }
      
      if (scalingLabel === 'Moderate' && varNameDefValue){
        let varNameDevValueType = typeof this[varNameDefValue];
        if (varNameDevValueType == 'object' && varNameDefValueProp){
          this[varNameDefValue][varNameDefValueProp] = idx;
        }else {
          this[varNameDefValue] = idx;
        }

        
        console.log('scalingLabel=',scalingLabel,varNameDefValue+'=',this[varNameDefValue]);
      }
      
      if (addModifiers){
        options.push({text: '+'+r+ ' - '+ this.monRef.getScalingLabelFromLevelScore(scaleMatrix,levelIdx,r), value: r});
      } else {
        options.push({text: r+ ' - '+ this.monRef.getScalingLabelFromLevelScore(scaleMatrix,levelIdx,r), value: r});
      }
      
      idx++;
    }
    return options;
  }

  async customPicker(options: PickerColumnOption[],selectedIndex: number) {
    let opts: PickerOptions = {
      cssClass: 'monster-picker',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done',
          cssClass: 'special-done'
        }
      ],
      columns: [
        {
          cssClass: 'monster-picker-column',
          selectedIndex: selectedIndex || 0,
          align: 'left',
          name: 'col1',
          options: options
        }
      ]
    };

    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    let selected;

    return new Promise(res => {
      picker.onDidDismiss().then(async data => {
        let col1 = await picker.getColumn('col1');
        selected = await col1.options[col1.selectedIndex];
        console.log('selected=',selected);

        if(Math.sign(selected.value) == 1){
          selected.modDisplayValue = '+'+selected.value;
        } else {
          selected.modDisplayValue = selected.value;
        }
        res(selected);
      });
    });
  }


  async showBasicPicker() {
    let pickColOpts: PickerColumnOption[] = [
        { text: 'Angular', value: 'A' },
        { text: 'Vue', value: 'B', selected: true },
        { text: 'React', value: 'C' }
      ];
    let opts: PickerOptions = {
      cssClass: 'monster-picker',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done'
        }
      ],
      columns: [
        {
          cssClass: 'monster-picker-column',
          selectedIndex: 1, // THAT FUCKING WORKS
          name: 'framework',
          options: pickColOpts
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('framework');
      /* this.framework = col.options[col.selectedIndex].text */;
    });
  }

  async showAdvancedPicker() {
    let opts: PickerOptions = {
      cssClass: 'academy-picker',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done',
          cssClass: 'special-done'
        }
      ],
      columns: [
        {
          name: 'game',
          options: [
            { text: 'Dota', value: 'dota' },
            { text: 'WoW', value: 'wow' },
            { text: 'CS', value: 'cs' }
          ]
        },
        {
          name: 'category',
          options: [
            { text: 'MOBA', value: 'MOBA' },
            { text: 'MMORPG', value: 'MMORPG' }
          ]
        },
        {
          name: 'rating',
          options: [
            { text: 'Good', value: 1 },
            { text: 'Very Good', value: 2 },
            { text: 'Excellent', value: 3 }
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let game = await picker.getColumn('game');
      let cat = await picker.getColumn('category');
      let rating = await picker.getColumn('rating');
      /* this.selected = [
        game.options[game.selectedIndex].text, 
        cat.options[cat.selectedIndex].text,
        rating.options[rating.selectedIndex].text
      ]; */
    });
  }

}
