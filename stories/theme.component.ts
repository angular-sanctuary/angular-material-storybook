import { Component } from '@angular/core';
import * as tinycolor from 'tinycolor2';
import {MatButtonModule} from "@angular/material/button";

export interface Color {
  name: string;
  hex: string;
  darkContrast: boolean;
}

@Component({
  selector: 'app-theme',
  template: `
    <style>
      article {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
      }
      article > * {
        margin-right: 8px;
      }
    </style>
    <article>
      <label for="primaryColor">Primary color</label>
      <input id="primaryColor" type="color" #primary>
      <button mat-raised-button color="primary" (click)="savePrimaryColor(primary.value)">save</button>
    </article>
    <article>
      <label for="accentColor">Accent color</label>
      <input id="accentColor" type="color" #accent>
      <button mat-raised-button color="accent" (click)="saveAccentColor(accent.value)">save</button>
    </article>
    <article>
      <label for="warnColor">Warn color</label>
      <input id="warnColor" type="color" #warn>
      <button mat-raised-button color="warn" (click)="saveWarnColor(warn.value)">save</button>
    </article>

    <h3>Presets</h3>

    <button mat-raised-button (click)="saveIndigoPreset()">Indigo & Pink</button>
    <button mat-raised-button (click)="saveDeepPurplePreset()">Deep Purple & Amber</button>
    <button mat-raised-button (click)="savePinkPreset()">Pink & Blue-grey</button>
    <button mat-raised-button (click)="savePurplePreset()">Purple & Green</button>


  `,
  standalone: true,
  imports: [MatButtonModule]
})
export class ThemeComponent {
  primaryColorPalette: Color[] = [];
  accentColorPalette: Color[] = [];
  warnColorPalette: Color[] = [];

  constructor() {
    this.saveIndigoPreset();
  }

  savePrimaryColor(color: string) {
    this.primaryColorPalette = computeColors(color);
    updateTheme(this.primaryColorPalette, 'primary');
  }

  saveAccentColor(color: string) {
    this.accentColorPalette = computeColors(color);
    updateTheme(this.accentColorPalette, 'accent');
  }

  saveWarnColor(color: string) {
    this.warnColorPalette = computeColors(color);
    updateTheme(this.warnColorPalette, 'warn');
  }

  saveIndigoPreset() {
    this.savePrimaryColor('#3f51b5');
    this.saveAccentColor('#ff4081');
    this.saveWarnColor('#f44336');
  }

  saveDeepPurplePreset() {
    this.savePrimaryColor('#673ab7');
    this.saveAccentColor('#ffd740');
    this.saveWarnColor('#f44336');
  }

  savePinkPreset() {
    this.savePrimaryColor('#e91e63');
    this.saveAccentColor('#607d8b');
    this.saveWarnColor('#f44336');
  }

  savePurplePreset() {
    this.savePrimaryColor('#9c27b0');
    this.saveAccentColor('#69f0ae');
    this.saveWarnColor('#f44336');
  }

}

function updateTheme(colors: Color[], theme: string) {
  colors.forEach(color => {
    document.documentElement.style.setProperty(
      `--theme-${theme}-${color.name}`,
      color.hex
    );
    document.documentElement.style.setProperty(
      `--theme-${theme}-contrast-${color.name}`,
      color.darkContrast ? 'rgba(black, 0.87)' : 'white'
    );
  });
}

function computeColors(hex: string): Color[] {
  return [
    getColorObject(tinycolor(hex).lighten(52), '50'),
    getColorObject(tinycolor(hex).lighten(37), '100'),
    getColorObject(tinycolor(hex).lighten(26), '200'),
    getColorObject(tinycolor(hex).lighten(12), '300'),
    getColorObject(tinycolor(hex).lighten(6), '400'),
    getColorObject(tinycolor(hex), '500'),
    getColorObject(tinycolor(hex).darken(6), '600'),
    getColorObject(tinycolor(hex).darken(12), '700'),
    getColorObject(tinycolor(hex).darken(18), '800'),
    getColorObject(tinycolor(hex).darken(24), '900'),
    getColorObject(tinycolor(hex).lighten(50).saturate(30), 'A100'),
    getColorObject(tinycolor(hex).lighten(30).saturate(30), 'A200'),
    getColorObject(tinycolor(hex).lighten(10).saturate(15), 'A400'),
    getColorObject(tinycolor(hex).lighten(5).saturate(5), 'A700')
  ];
}

function getColorObject(value: string | tinycolor.ColorFormats.PRGB | tinycolor.ColorFormats.RGB | tinycolor.ColorFormats.HSL | tinycolor.ColorFormats.HSV | tinycolor.Instance | undefined, name: string): Color {
  const c = tinycolor(value);
  return {
    name: name,
    hex: c.toHexString(),
    darkContrast: c.isLight()
  };
}
