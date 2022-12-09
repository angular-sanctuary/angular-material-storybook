import {Meta, moduleMetadata, StoryFn} from "@storybook/angular";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from "@angular/material/button";
import {badgeArgtypes} from "./badge/badge.argtype";

export default {
  title: 'Components/Icon',
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, MatBadgeModule, MatButtonModule]
    })
  ],
  parameters: {
    options: {
      controls: {
        disable: true
      }
    }
  }
} as Meta;

export const BasicUsage: StoryFn = args => ({
  props: args,
  template: `
<style>mat-icon {margin: 10px}</style>
<mat-icon>more_vert</mat-icon>
<mat-icon>home</mat-icon>
<mat-icon>menu</mat-icon>
<mat-icon>favorite</mat-icon>
<mat-icon>open_in_new</mat-icon>
`
});
BasicUsage.storyName = 'basic usage';

export const WithBadge: StoryFn = args => ({
  props: args,
  template: `
<style>mat-icon {margin: 10px}</style>
<mat-icon [matBadge]="matBadge" [matBadgeDescription]="matBadgeDescription" [matBadgeDisabled]="matBadgeDisabled" [matBadgeHidden]="matBadgeHidden" [matBadgeOverlap]="matBadgeOverlap" [matBadgePosition]="matBadgePosition" [matBadgeSize]="matBadgeSize">more_vert</mat-icon>
<mat-icon [matBadge]="matBadge" [matBadgeDescription]="matBadgeDescription" [matBadgeDisabled]="matBadgeDisabled" [matBadgeHidden]="matBadgeHidden" [matBadgeOverlap]="matBadgeOverlap" [matBadgePosition]="matBadgePosition" [matBadgeSize]="matBadgeSize" matBadgeColor="primary">home</mat-icon>
<mat-icon [matBadge]="matBadge" [matBadgeDescription]="matBadgeDescription" [matBadgeDisabled]="matBadgeDisabled" [matBadgeHidden]="matBadgeHidden" [matBadgeOverlap]="matBadgeOverlap" [matBadgePosition]="matBadgePosition" [matBadgeSize]="matBadgeSize" matBadgeColor="accent">menu</mat-icon>
<mat-icon [matBadge]="matBadge" [matBadgeDescription]="matBadgeDescription" [matBadgeDisabled]="matBadgeDisabled" [matBadgeHidden]="matBadgeHidden" [matBadgeOverlap]="matBadgeOverlap" [matBadgePosition]="matBadgePosition" [matBadgeSize]="matBadgeSize" matBadgeColor="warn">favorite</mat-icon>
<mat-icon [matBadge]="matBadge" [matBadgeDescription]="matBadgeDescription" [matBadgeDisabled]="matBadgeDisabled" [matBadgeHidden]="matBadgeHidden" [matBadgeOverlap]="matBadgeOverlap" [matBadgePosition]="matBadgePosition" [matBadgeSize]="matBadgeSize">open_in_new</mat-icon>
`
});
WithBadge.storyName = 'with badge';
WithBadge.parameters = {
  controls: {
    expanded: true
  }
}
WithBadge.argTypes = {
  ...badgeArgtypes
}

export const WithButtons: StoryFn = args => ({
  props: args,
  template: `
<style>mat-icon {margin: 10px}</style>
<button mat-icon-button><mat-icon>more_vert</mat-icon></button>
<button mat-icon-button color="primary"><mat-icon>home</mat-icon></button>
<button mat-icon-button color="accent"><mat-icon>menu</mat-icon></button>
<button mat-icon-button color="warn"><mat-icon>favorite</mat-icon></button>
<button mat-icon-button disabled><mat-icon>open_in_new</mat-icon></button>
`
});
WithButtons.storyName = 'with buttons';

export const WithFloatingActionButtons: StoryFn = args => ({
  props: args,
  template: `
<style>button {margin: 10px}</style>
<button mat-fab><mat-icon>more_vert</mat-icon></button>
<button mat-fab color="primary"><mat-icon>home</mat-icon></button>
<button mat-fab color="accent"><mat-icon>menu</mat-icon></button>
<button mat-fab color="warn"><mat-icon>favorite</mat-icon></button>
<button mat-fab disabled><mat-icon>open_in_new</mat-icon></button>
`
});
WithFloatingActionButtons.storyName = 'with floating action buttons';

export const WithMiniFloatingActionButtons: StoryFn = args => ({
  props: args,
  template: `
<style>button {margin: 10px}</style>
<button mat-mini-fab><mat-icon>more_vert</mat-icon></button>
<button mat-mini-fab color="primary"><mat-icon>home</mat-icon></button>
<button mat-mini-fab color="accent"><mat-icon>menu</mat-icon></button>
<button mat-mini-fab color="warn"><mat-icon>favorite</mat-icon></button>
<button mat-mini-fab disabled><mat-icon>open_in_new</mat-icon></button>
`
});
WithMiniFloatingActionButtons.storyName = 'with mini floating action buttons';


