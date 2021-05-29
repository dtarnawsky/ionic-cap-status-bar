import { Component } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private isDark: boolean = true;
  private isHidden: boolean = false;

  constructor() { }

  async toggleDarkLight() {
    this.isDark = !this.isDark;
    const newStyle: Style = this.isDark ? Style.Dark : Style.Light;
    await StatusBar.setStyle({ style: newStyle });
    alert(`StatusBar style is now ${newStyle}`);
  }

  async toggleShowHide() {
    this.isHidden = !this.isHidden;
    if (this.isHidden) {
      await StatusBar.hide();
    }
    else {
      await StatusBar.show();
    }
  }

}
