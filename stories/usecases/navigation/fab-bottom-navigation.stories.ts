import {Meta, Story} from "@storybook/angular";
import {FabBottomNavigationComponent} from "./fab-bottom-navigation.component";

export default {
  title: 'Usecases/navigation',
  component: FabBottomNavigationComponent,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
} as Meta;

export const Template: Story<FabBottomNavigationComponent> = args => ({
  props: args
});
Template.storyName = 'bottom navigation 1';
