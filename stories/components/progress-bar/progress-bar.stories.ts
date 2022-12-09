import {Meta, moduleMetadata, StoryFn} from "@storybook/angular";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {progressBarArgtypes} from "./progress-bar.argtype";

export default {
  title: 'components/Progress bar',
  decorators: [
    moduleMetadata({
      imports: [MatProgressBarModule]
    })
  ],
  argTypes: progressBarArgtypes,
  parameters: {
    controls: {
      expanded: true,
      exclude: ['mode']
    }
  }
} as Meta;

export const WithBasicUsage: StoryFn = args => ({
  props: args,
  template: `
    <style>
        mat-progress-bar {
        width: 15rem;
        margin-bottom: 1rem;
        }
    </style>
    <mat-progress-bar [bufferValue]="bufferValue" [color]="color" mode="determinate" [value]="value"></mat-progress-bar>
    <mat-progress-bar [bufferValue]="bufferValue" [color]="color" mode="indeterminate" [value]="value"></mat-progress-bar>
    <mat-progress-bar [bufferValue]="bufferValue" [color]="color" mode="query" [value]="value"></mat-progress-bar>
    <mat-progress-bar [bufferValue]="bufferValue" [color]="color" mode="buffer" [value]="value"></mat-progress-bar>
`
});
WithBasicUsage.storyName = 'basic usage';
