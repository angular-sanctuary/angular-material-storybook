import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { badgeArgtypes } from './badge/badge.argtype';

export default {
  title: 'Components/Icon',
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, MatBadgeModule, MatButtonModule],
    }),
  ],
  parameters: {
    options: {
      controls: {
        disable: true,
      },
    },
  },
} as Meta;

export const BasicUsage: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
<style>mat-icon {margin: 10px}</style>
<mat-icon>more_vert</mat-icon>
<mat-icon>home</mat-icon>
<mat-icon>menu</mat-icon>
<mat-icon>favorite</mat-icon>
<mat-icon>open_in_new</mat-icon>
`,
  }),
  name: 'basic usage',
};

export const WithBadge: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
<style>mat-icon {margin: 10px}</style>
<mat-icon [matBadge]="matBadge" [matBadgeDescription]="matBadgeDescription" [matBadgeDisabled]="matBadgeDisabled" [matBadgeHidden]="matBadgeHidden" [matBadgeOverlap]="matBadgeOverlap" [matBadgePosition]="matBadgePosition" [matBadgeSize]="matBadgeSize">more_vert</mat-icon>
<mat-icon [matBadge]="matBadge" [matBadgeDescription]="matBadgeDescription" [matBadgeDisabled]="matBadgeDisabled" [matBadgeHidden]="matBadgeHidden" [matBadgeOverlap]="matBadgeOverlap" [matBadgePosition]="matBadgePosition" [matBadgeSize]="matBadgeSize" matBadgeColor="primary">home</mat-icon>
<mat-icon [matBadge]="matBadge" [matBadgeDescription]="matBadgeDescription" [matBadgeDisabled]="matBadgeDisabled" [matBadgeHidden]="matBadgeHidden" [matBadgeOverlap]="matBadgeOverlap" [matBadgePosition]="matBadgePosition" [matBadgeSize]="matBadgeSize" matBadgeColor="accent">menu</mat-icon>
<mat-icon [matBadge]="matBadge" [matBadgeDescription]="matBadgeDescription" [matBadgeDisabled]="matBadgeDisabled" [matBadgeHidden]="matBadgeHidden" [matBadgeOverlap]="matBadgeOverlap" [matBadgePosition]="matBadgePosition" [matBadgeSize]="matBadgeSize" matBadgeColor="warn">favorite</mat-icon>
<mat-icon [matBadge]="matBadge" [matBadgeDescription]="matBadgeDescription" [matBadgeDisabled]="matBadgeDisabled" [matBadgeHidden]="matBadgeHidden" [matBadgeOverlap]="matBadgeOverlap" [matBadgePosition]="matBadgePosition" [matBadgeSize]="matBadgeSize">open_in_new</mat-icon>
`,
  }),
  name: 'with badge',
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    ...badgeArgtypes,
  },
};

export const WithButtons: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
<style>mat-icon {margin: 10px}</style>
<button mat-icon-button><mat-icon>more_vert</mat-icon></button>
<button mat-icon-button color="primary"><mat-icon>home</mat-icon></button>
<button mat-icon-button color="accent"><mat-icon>menu</mat-icon></button>
<button mat-icon-button color="warn"><mat-icon>favorite</mat-icon></button>
<button mat-icon-button disabled><mat-icon>open_in_new</mat-icon></button>
`,
  }),
  name: 'with buttons',
};

export const WithFloatingActionButtons: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
<style>button {margin: 10px}</style>
<button mat-fab><mat-icon>more_vert</mat-icon></button>
<button mat-fab color="primary"><mat-icon>home</mat-icon></button>
<button mat-fab color="accent"><mat-icon>menu</mat-icon></button>
<button mat-fab color="warn"><mat-icon>favorite</mat-icon></button>
<button mat-fab disabled><mat-icon>open_in_new</mat-icon></button>
`,
  }),
  name: 'with floating action buttons',
};

export const WithMiniFloatingActionButtons: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
<style>button {margin: 10px}</style>
<button mat-mini-fab><mat-icon>more_vert</mat-icon></button>
<button mat-mini-fab color="primary"><mat-icon>home</mat-icon></button>
<button mat-mini-fab color="accent"><mat-icon>menu</mat-icon></button>
<button mat-mini-fab color="warn"><mat-icon>favorite</mat-icon></button>
<button mat-mini-fab disabled><mat-icon>open_in_new</mat-icon></button>
`,
  }),
  name: 'with mini floating action buttons',
};
