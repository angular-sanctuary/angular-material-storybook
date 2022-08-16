import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {MatIconModule} from "@angular/material/icon";

export default {
  title: 'Components/Icon',
  decorators: [
    moduleMetadata({
      imports: [MatIconModule]
    })
  ],
  argTypes: { label: { control: 'text' }}
} as Meta;

export const Template: Story = args => ({
  props: {
    ...args,
    label: 'home'
  },
  template: `<mat-icon>{{label}}</mat-icon>`
});
Template.storyName = 'Overview';

