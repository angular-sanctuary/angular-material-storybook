import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {progressSpinnerArgtypes} from "./progress-spinner.argtype";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

export default {
  title: 'components/Progress spinner',
  decorators: [
    moduleMetadata({
      imports: [MatProgressSpinnerModule]
    })
  ],
  argTypes: progressSpinnerArgtypes,
  parameters: {
    layout: 'centered',
    controls: {
      expanded: true,
      exclude: ['mode']
    }
  }
} as Meta;

export const WithBasicUsage: Story = args => ({
  props: args,
  template: `
    <style>
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        mat-progress-spinner:first-child {
        margin-block-end: 3rem;
        }
    </style>
    <mat-progress-spinner [color]="color" mode="determinate" [value]="value" [diameter]="diameter" [strokeWidth]="strokeWidth"></mat-progress-spinner>
    <mat-progress-spinner [color]="color" mode="indeterminate" [value]="value" [diameter]="diameter" [strokeWidth]="strokeWidth"></mat-progress-spinner>
`
});
WithBasicUsage.storyName = 'basic usage';
