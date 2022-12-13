import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { progressSpinnerArgtypes } from './progress-spinner.argtype';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
export default {
  title: 'components/Progress spinner',
  decorators: [
    moduleMetadata({
      imports: [MatProgressSpinnerModule],
    }),
  ],
  argTypes: progressSpinnerArgtypes,
  parameters: {
    controls: {
      expanded: true,
      exclude: ['mode'],
    },
  },
} as Meta;

export const WithBasicUsage: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
    <style>
        mat-progress-spinner:first-child {
        margin-block-end: 3rem;
        }
    </style>
    <mat-progress-spinner [color]="color" mode="determinate" [value]="value" [diameter]="diameter" [strokeWidth]="strokeWidth"></mat-progress-spinner>
    <mat-progress-spinner [color]="color" mode="indeterminate" [value]="value" [diameter]="diameter" [strokeWidth]="strokeWidth"></mat-progress-spinner>
`,
  }),
  name: 'basic usage',
};
