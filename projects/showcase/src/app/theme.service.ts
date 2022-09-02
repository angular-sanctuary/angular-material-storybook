import { Injectable } from '@angular/core';
import * as tinycolor from "tinycolor2";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  saveLightPrimaryColor = (color: string) => {
    const primaryColorPalette = this.computeColors(color);
    this.updateTheme(primaryColorPalette, 'primary', 'light');
  }

  saveLightAccentColor(color: string) {
    const accentColorPalette = this.computeColors(color);
    this.updateTheme(accentColorPalette, 'accent', 'light');
  }

  saveLightWarnColor(color: string) {
    const warnColorPalette = this.computeColors(color);
    this.updateTheme(warnColorPalette, 'warn', 'light');
  }

  saveDarkPrimaryColor(color: string) {
    const primaryColorPalette = this.computeColors(color);
    this.updateTheme(primaryColorPalette, 'primary', 'dark');
  }

  saveDarkAccentColor(color: string) {
    const accentColorPalette = this.computeColors(color);
    this.updateTheme(accentColorPalette, 'accent', 'dark');
  }

  saveDarktWarnColor(color: string) {
    const warnColorPalette = this.computeColors(color);
    this.updateTheme(warnColorPalette, 'warn', 'dark');
  }

  saveIndigoPreset() {
    this.saveLightPrimaryColor('#3f51b5');
    this.saveLightAccentColor('#ff4081');
    this.saveLightWarnColor('#f44336');
  }

  saveDeepPurplePreset() {
    this.saveLightPrimaryColor('#673ab7');
    this.saveLightAccentColor('#ffd740');
    this.saveLightWarnColor('#f44336');
  }

  savePinkPreset() {
    this.saveLightPrimaryColor('#e91e63');
    this.saveLightAccentColor('#607d8b');
    this.saveLightWarnColor('#f44336');
  }

  savePurplePreset() {
    this.saveLightPrimaryColor('#9c27b0');
    this.saveLightAccentColor('#69f0ae');
    this.saveLightWarnColor('#f44336');
  }

  toggleDarkTheme() {
    document.documentElement.classList.toggle('dark-theme');
  }

  updateTheme(colors: any[], theme: any, mode: any) {
    colors.forEach(color => {
      document.body.style.setProperty(
        `--${mode}-theme-${theme}-${color.name}`,
        color.hex
      );
      document.body.style.setProperty(
        `--${mode}-theme-${theme}-contrast-${color.name}`,
        color.darkContrast ? 'black' : 'white'
      );
    });
  }

  computeColors(hex: any) {
    return [
      this.getColorObject(tinycolor(hex).lighten(52), '50'),
      this.getColorObject(tinycolor(hex).lighten(37), '100'),
      this.getColorObject(tinycolor(hex).lighten(26), '200'),
      this.getColorObject(tinycolor(hex).lighten(12), '300'),
      this.getColorObject(tinycolor(hex).lighten(6), '400'),
      this.getColorObject(tinycolor(hex), '500'),
      this.getColorObject(tinycolor(hex).darken(6), '600'),
      this.getColorObject(tinycolor(hex).darken(12), '700'),
      this.getColorObject(tinycolor(hex).darken(18), '800'),
      this.getColorObject(tinycolor(hex).darken(24), '900'),
      this.getColorObject(tinycolor(hex).lighten(50).saturate(30), 'A100'),
      this.getColorObject(tinycolor(hex).lighten(30).saturate(30), 'A200'),
      this.getColorObject(tinycolor(hex).lighten(10).saturate(15), 'A400'),
      this.getColorObject(tinycolor(hex).lighten(5).saturate(5), 'A700')
    ];
  }

  getColorObject(value: any, name: any) {
    const c = tinycolor(value);
    return {
      name: name,
      hex: c.toHexString(),
      darkContrast: c.isLight()
    };
  }
}
