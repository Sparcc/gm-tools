import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-build-monster',
  templateUrl: './build-monster.page.html',
  styleUrls: ['./build-monster.page.scss'],
})
export class BuildMonsterPage implements OnInit {
  selectedSkill;
  selectedPerception;

  constructor(private pickerCtrl: PickerController) { }

  ngOnInit() {
  }

  async skillPicker() {
    var options = [
      { text: 'Extreme', value: 0 },
      { text: 'High', value: 1 },
      { text: 'Moderate', value: 2 },
      { text: 'Low', value: 3 }
    ];
    let perceptionValues = await this.levelScalePicker(options);
  }

  async perceptionPicker() {
    var options = [
      { text: 'Extreme', value: 0 },
      { text: 'High', value: 1 },
      { text: 'Moderate', value: 2 },
      { text: 'Low', value: 3 },
      { text: 'Terrible', value: 4 }
    ];
    this.selectedPerception = await this.levelScalePicker(options);
    console.log("this.selectedPerception=",this.selectedPerception);
  }

  async levelScalePicker(scaleOptions) {
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
          name: 'Level',
          options: [
            { text: 'Level 1', value: 1 },
            { text: 'Level 2', value: 2 },
            { text: 'Level 3', value: 3 },
            { text: 'Level 4', value: 4 },
            { text: 'Level 6', value: 6 },
            { text: 'Level 7', value: 7 },
            { text: 'Level 8', value: 8 },
            { text: 'Level 9', value: 9 },
            { text: 'Level 10', value: 10 },
            { text: 'Level 11', value: 11 },
            { text: 'Level 12', value: 12 },
            { text: 'Level 13', value: 13 },
            { text: 'Level 14', value: 14 },
            { text: 'Level 15', value: 15 },
            { text: 'Level 16', value: 16 },
            { text: 'Level 17', value: 17 },
            { text: 'Level 18', value: 18 },
            { text: 'Level 19', value: 19 },
            { text: 'Level 20', value: 20 },
            { text: 'Level 21', value: 21 },
            { text: 'Level 22', value: 22 },
            { text: 'Level 23', value: 23 },
            { text: 'Level 24', value: 24 }
          ]
        },
        {
          name: 'Scale',
          options: scaleOptions
        }
      ]
    };
    console.log("Clicked!");

    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    let selected;
    picker.onDidDismiss().then(async data => {
      let level = await picker.getColumn('Level');
      let scale = await picker.getColumn('Scale');
      selected = [
        level.options[level.selectedIndex].text, 
        scale.options[scale.selectedIndex].text
      ];
    });

    return new Promise(selected);
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
