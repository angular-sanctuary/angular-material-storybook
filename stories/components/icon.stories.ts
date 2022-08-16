import {Meta, moduleMetadata, Story} from "@storybook/angular";

export default {
  title: 'Components/Icon',
  decorators: [
    moduleMetadata({
      imports: []
    })
  ]
} as Meta;

export const Template: Story = args => ({
  props: args,
  template: `foo`
});
Template.storyName = 'foo to'
