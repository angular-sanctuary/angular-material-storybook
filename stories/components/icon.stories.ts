import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from "@angular/material/button";

export default {
  title: 'Components/Icon',
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, MatBadgeModule, MatButtonModule]
    })
  ]
} as Meta;

export const Overview: Story = args => ({
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
Overview.storyName = 'Overview';

export const Badge: Story = args => ({
  props: args,
  template: `
<style>mat-icon {margin: 10px}</style>
<mat-icon matBadge="2">more_vert</mat-icon>
<mat-icon matBadge="2" matBadgeColor="primary">home</mat-icon>
<mat-icon matBadge="2" matBadgeColor="accent">menu</mat-icon>
<mat-icon matBadge="2" matBadgeColor="warn">favorite</mat-icon>
<mat-icon matBadge="2">open_in_new</mat-icon>
`
});
Badge.storyName = 'with Badge';

export const Buttons: Story = args => ({
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
Buttons.storyName = 'with buttons';


