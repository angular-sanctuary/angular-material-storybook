import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {formFieldArgtypes} from "./form-field-argtype";
import {MatSelectModule} from "@angular/material/select";

export default {
  title: 'components/Form field',
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
      ]
    })
  ],
  parameters: {
    layout: 'centered',
    controls: {
      expanded: true
    }
  },
  argTypes: formFieldArgtypes
} as Meta;

export const WithBasicUsage: Story = args => ({
  props: args,
  template: `
    <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
        <mat-label>Password</mat-label>
        <input type="text" matInput>
    </mat-form-field>
  `
});
WithBasicUsage.storyName = 'basic usage';
WithBasicUsage.parameters = {
  controls: {
    exclude: ['alignHint']
  }
}

export const WithStartHint: Story = args => ({
  props: args,
  template: `
    <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
        <mat-label>Password</mat-label>
        <input type="text" matInput>
        <mat-hint align="start">at least 8 characters</mat-hint>
    </mat-form-field>
  `
});
WithStartHint.storyName = 'with hint (start)';

export const WithEndHint: Story = args => ({
  props: args,
  template: `
    <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
        <mat-label>Contributions</mat-label>
        <mat-select>
            <mat-option>Components</mat-option>
            <mat-option>Use cases</mat-option>
        </mat-select>
        <mat-hint align="end">Choose an option ^</mat-hint>
    </mat-form-field>
  `
});
WithEndHint.storyName = 'with hint (end)'

export const WithDoubleHints: Story = args => ({
  props: args,
  template: `
    <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
        <mat-label>Username</mat-label>
        <input type="text" matInput #input [attr.maxlength]="10">
        <mat-hint align="start">Max 10 characters</mat-hint>
        <mat-hint align="end">{{input.value.length || 0}}/10</mat-hint>
    </mat-form-field>
  `
});
WithDoubleHints.storyName = 'with hint (double)'
