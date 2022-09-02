import React, {useState} from 'react';
import * as tinycolor from "tinycolor2";
import Diamond from './assets/diamond.svg';

export default function ThemingSettings() {
  const [lightPrimaryColor, setLightPrimaryColor] = useState(window.getComputedStyle(document.documentElement).getPropertyValue('--light-theme-primary-500') || '#006680');
  const [lightAccentColor, setLightAccentColor] = useState(window.getComputedStyle(document.documentElement).getPropertyValue('--light-theme-accent-500') || '#F59432');
  const [lightWarnColor, setLightWarnColor] = useState(window.getComputedStyle(document.documentElement).getPropertyValue('--light-theme-warn-500') || '#f44336');

  const [lightPrimaryPalette, setLightPrimaryPalette] = useState(computeColors('#006680'));
  const [lightAccentPalette, setLightAccentPalette] = useState(computeColors('#F59432'));
  const [lightWarnPalette, setLightWarnPalette] = useState(computeColors('#f44336'));

  const [darkPrimaryColor, setDarkPrimaryColor] = useState(window.getComputedStyle(document.documentElement).getPropertyValue('--dark-theme-primary-500') || '#006680');
  const [darkAccentColor, setDarkAccentColor] = useState(window.getComputedStyle(document.documentElement).getPropertyValue('--dark-theme-accent-500') || '#F59432');
  const [darkWarnColor, setDarkWarnColor] = useState(window.getComputedStyle(document.documentElement).getPropertyValue('--dark-theme-warn-500') || '#f44336');

  const [darkPrimaryPalette, setDarkPrimaryPalette] = useState(computeColors('#006680'));
  const [darkAccentPalette, setDarkAccentPalette] = useState(computeColors('#F59432'));
  const [darkWarnPalette, setDarkWarnPalette] = useState(computeColors('#f44336'));

  const [darkMode, setDarkMode] = useState(document.documentElement.classList.contains('dark-theme'));

  const saveLightPrimaryColor = (e) => {
    const primaryColor = e.target?.value || e;
    setLightPrimaryColor(primaryColor);
    const primaryColorPalette = computeColors(primaryColor);
    setLightPrimaryPalette(primaryColorPalette);
    updateTheme(primaryColorPalette, 'primary', 'light');
  }

  const saveLightAccentColor = (e) => {
    const accentColor = e.target?.value || e;
    setLightAccentColor(accentColor);
    const accentColorPalette = computeColors(accentColor);
    setLightAccentPalette(accentColorPalette);
    updateTheme(accentColorPalette, 'accent', 'light');
  }

  const saveLightWarnColor = (e) => {
    const warnColor = e.target?.value || e;
    setLightWarnColor(warnColor);
    const warnColorPalette = computeColors(warnColor);
    setLightWarnPalette(warnColorPalette);
    updateTheme(warnColorPalette, 'warn', 'light');
  }

  const saveDarkPrimaryColor = (e) => {
    const primaryColor = e.target?.value || e;
    setDarkPrimaryColor(primaryColor);
    const primaryColorPalette = computeColors(primaryColor);
    setDarkPrimaryPalette(primaryColorPalette);
    updateTheme(primaryColorPalette, 'primary', 'dark');
  }

  const saveDarkAccentColor = (e) => {
    const accentColor = e.target?.value || e;
    setDarkAccentColor(accentColor);
    const accentColorPalette = computeColors(accentColor);
    setDarkAccentPalette(accentColorPalette);
    updateTheme(accentColorPalette, 'accent', 'dark');
  }

  const saveDarkWarnColor = (e) => {
    const warnColor = e.target?.value || e;
    setDarkWarnColor(warnColor);
    const warnColorPalette = computeColors(warnColor);
    setDarkWarnPalette(warnColorPalette);
    updateTheme(warnColorPalette, 'warn', 'dark');
  }

  const saveIndigoPreset = () => {
    saveLightPrimaryColor('#3f51b5');
    setLightPrimaryColor('#3f51b5');
    saveLightAccentColor('#ff4081');
    setLightAccentColor('#ff4081');
    saveLightWarnColor('#f44336');
    setLightWarnColor('#f44336');
  }

  const saveDeepPurplePreset = () => {
    saveLightPrimaryColor('#673ab7');
    setLightPrimaryColor('#673ab7');
    saveLightAccentColor('#ffd740');
    setLightAccentColor('#ffd740');
    saveLightWarnColor('#f44336');
    setLightWarnColor('#f44336');
  }

  const savePinkPreset = () => {
    saveLightPrimaryColor('#e91e63');
    setLightPrimaryColor('#e91e63');
    saveLightAccentColor('#607d8b');
    setLightAccentColor('#607d8b');
    saveLightWarnColor('#f44336');
    setLightWarnColor('#f44336');
  }

  const savePurplePreset = () => {
    saveLightPrimaryColor('#9c27b0');
    setLightPrimaryColor('#9c27b0');
    saveLightAccentColor('#69f0ae');
    setLightAccentColor('#69f0ae');
    saveLightWarnColor('#f44336');
    setLightWarnColor('#f44336');
  }

  const toggleDarkTheme = (mode) => {
    const newMode = mode ?? !darkMode;
    if(newMode) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
    setDarkMode(newMode);
  }

  return (
    <>
      <header className="theme-settings__header">
        <button className="theme-settings__light-mode-button"  style={{borderBottomColor: !darkMode ? 'rgba(0,68,85,1)' : 'white'}} onClick={() => toggleDarkTheme(false)}>LIGHT THEME</button>
        <button className="theme-settings__dark-mode-button" style={{borderBottomColor: darkMode ? 'rgba(0,68,85,1)' : 'white'}} onClick={() => toggleDarkTheme(true)}>DARK THEME</button>
      </header>

      <aside className="theme-settings__info-container">
        <img className="theme-settings__info-icon" src={Diamond} aria-hidden={true}/>
        <span>Theme changes are applied on all stories</span>
      </aside>
      <section style={{display: darkMode ? 'none' : 'block'}}>
        <article className="theme-settings__color-field">
          <label htmlFor="primaryColor" className="theme-settings__primary-color-light-label">Primary color</label>
          <input className="theme-settings__color-input" id="primaryColor" type="color" value={lightPrimaryColor}
                 onChange={saveLightPrimaryColor}/>
        </article>
        <ul className="theme-settings__palette-container">
          {lightPrimaryPalette.map(color =>
            <li className="theme-settings__palette-item">
              <span className="theme_settings__palette-hex-item" style={{backgroundColor: color.hex}}/>
              <span className="theme_settings__palette-name-item">{color.name}</span>
            </li>
          )}
        </ul>
        <article className="theme-settings__color-field">
          <label htmlFor="accentColor" className="theme-settings__primary-color-light-label">Accent color</label>
          <input className="theme-settings__color-input" id="accentColor" type="color" value={lightAccentColor}
                 onChange={saveLightAccentColor}/>
        </article>
        <ul className="theme-settings__palette-container">
          {lightAccentPalette.map(color =>
            <li className="theme-settings__palette-item">
              <span className="theme_settings__palette-hex-item" style={{backgroundColor: color.hex}}/>
              <span className="theme_settings__palette-name-item">{color.name}</span>
            </li>
          )}
        </ul>
        <article className="theme-settings__color-field">
          <label htmlFor="warnColor" className="theme-settings__primary-color-light-label">Warn color</label>
          <input className="theme-settings__color-input" id="warnColor" type="color" value={lightWarnColor}
                 onChange={saveLightWarnColor}/>
        </article>
        <ul className="theme-settings__palette-container">
          {lightWarnPalette.map(color =>
            <li className="theme-settings__palette-item">
              <span className="theme_settings__palette-hex-item" style={{backgroundColor: color.hex}}/>
              <span className="theme_settings__palette-name-item">{color.name}</span>
            </li>
          )}
        </ul>
      </section>

      <section style={{display: !darkMode ? 'none' : 'block'}}>
        <article className="theme-settings__color-field">
          <label htmlFor="primaryColor" className="theme-settings__primary-color-light-label">Primary color</label>
          <input className="theme-settings__color-input" id="primaryColor" type="color" value={darkPrimaryColor}
                 onChange={saveDarkPrimaryColor}/>
        </article>
        <ul className="theme-settings__palette-container">
          {darkPrimaryPalette.map(color =>
            <li className="theme-settings__palette-item">
              <span className="theme_settings__palette-hex-item" style={{backgroundColor: color.hex}}/>
              <span className="theme_settings__palette-name-item">{color.name}</span>
            </li>
          )}
        </ul>
        <article className="theme-settings__color-field">
          <label htmlFor="accentColor" className="theme-settings__primary-color-light-label">Accent color</label>
          <input className="theme-settings__color-input" id="accentColor" type="color" value={darkAccentColor}
                 onChange={saveDarkAccentColor}/>
        </article>
        <ul className="theme-settings__palette-container">
          {darkAccentPalette.map(color =>
            <li className="theme-settings__palette-item">
              <span className="theme_settings__palette-hex-item" style={{backgroundColor: color.hex}}/>
              <span className="theme_settings__palette-name-item">{color.name}</span>
            </li>
          )}
        </ul>
        <article className="theme-settings__color-field">
          <label htmlFor="warnColor" className="theme-settings__primary-color-light-label">Warn color</label>
          <input className="theme-settings__color-input" id="warnColor" type="color" value={darkWarnColor}
                 onChange={saveDarkWarnColor}/>
        </article>
        <ul className="theme-settings__palette-container">
          {darkWarnPalette.map(color =>
            <li className="theme-settings__palette-item">
              <span className="theme_settings__palette-hex-item" style={{backgroundColor: color.hex}}/>
              <span className="theme_settings__palette-name-item">{color.name}</span>
            </li>
          )}
        </ul>
      </section>

      <hr/>

      <h3>Presets</h3>

      <section className="theme-settings__preset-color-container">
        <button className="theme-settings__preset-color-button ripple" onClick={saveIndigoPreset}>
          <span className="theme-settings__preset-color" style={{backgroundColor: '#3f51b5'}}/>
          <span className="theme-settings__preset-color" style={{backgroundColor: '#ff4081'}}/>
          <span className="theme-settings__preset-color" style={{backgroundColor: '#f44336'}}/>
        </button>

        <button className="theme-settings__preset-color-button ripple" onClick={saveDeepPurplePreset}>
          <span className="theme-settings__preset-color" style={{backgroundColor: '#673ab7'}}/>
          <span className="theme-settings__preset-color" style={{backgroundColor: '#ffd740'}}/>
          <span className="theme-settings__preset-color" style={{backgroundColor: '#f44336'}}/>
        </button>

        <button className="theme-settings__preset-color-button ripple" onClick={savePinkPreset}>
          <span className="theme-settings__preset-color" style={{backgroundColor: '#e91e63'}}/>
          <span className="theme-settings__preset-color" style={{backgroundColor: '#607d8b'}}/>
          <span className="theme-settings__preset-color" style={{backgroundColor: '#f44336'}}/>
        </button>

        <button className="theme-settings__preset-color-button ripple" onClick={savePurplePreset}>
          <span className="theme-settings__preset-color" style={{backgroundColor: '#9c27b0'}}/>
          <span className="theme-settings__preset-color" style={{backgroundColor: '#69f0ae'}}/>
          <span className="theme-settings__preset-color" style={{backgroundColor: '#f44336'}}/>
        </button>
      </section>
    </>
  );
}

function updateTheme(colors, theme, mode) {
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

function computeColors(hex) {
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

function getColorObject(value, name) {
  const c = tinycolor(value);
  return {
    name: name,
    hex: c.toHexString(),
    darkContrast: c.isLight()
  };
}
